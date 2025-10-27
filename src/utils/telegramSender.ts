// Telegram Bot API configuration
const TELEGRAM_BOT_TOKEN = "8010738456:AAEoag7AQtUnTAvAzMJVHJ3DYUXnA0b8MO4";
const TELEGRAM_CHAT_ID = "-1003229604443";

// Track recent messages to prevent duplicates
const recentMessages = new Map<string, number>();
const DUPLICATE_PREVENTION_WINDOW = 30000; // 30 seconds

// Функция для экранирования HTML-символов (защита от XSS)
function escapeHtml(text: string | undefined | null): string {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

// Create a hash from message content (works with Unicode)
async function createMessageHash(message: string): Promise<string> {
  try {
    // Try using Web Crypto API (modern browsers)
    if (typeof crypto !== 'undefined' && crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(message);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('').substring(0, 16);
    }
  } catch (error) {
    console.warn('Web Crypto API not available, using fallback hash');
  }
  
  // Fallback: simple hash using string manipulation
  let hash = 0;
  for (let i = 0; i < message.length; i++) {
    const char = message.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash).toString(16).substring(0, 16);
}

export interface QuizSubmissionData {
  answers: Record<string, any>;
  recommendations: {
    recommended_products: Array<{
      product_id: string;
      product_name: string;
      category: string;
      subcategory: string;
      main_benefits: string[];
      match_score: number;
      reasoning: string[];
      priority_level: 'high' | 'medium' | 'low';
      effectiveness_estimate: number;
      dosage_recommendation: string;
    }>;
    effectiveness_score: number;
    key_benefits: string[];
    wellness_profile: string;
    profile_description: string;
    recommended_kits: string[];
    lifestyle_insights: string[];
    usage_guidance: string;
  };
  timestamp: string;
  userInfo: {
    name?: string;
    email?: string;
    age?: number;
    gender?: string;
  };
}

// Test function to get chat information
export const testTelegramConnection = async (): Promise<void> => {
  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
    const data = await response.json();
    console.log('Telegram bot updates:', data);
    
    if (data.result && data.result.length > 0) {
      console.log('Available chats:', data.result.map((update: any) => ({
        chat_id: update.message?.chat?.id,
        chat_type: update.message?.chat?.type,
        chat_title: update.message?.chat?.title || update.message?.chat?.first_name
      })));
    }
  } catch (error) {
    console.error('Failed to test Telegram connection:', error);
  }
};

export const sendQuizResultsToTelegram = async (data: QuizSubmissionData, retryCount: number = 0): Promise<boolean> => {
  const maxRetries = 3;
  
  try {
    // Format the message for Telegram
    const message = formatQuizResultsMessage(data);
    
    // Create a hash of the message content to check for duplicates
    const messageHash = await createMessageHash(message);
    const now = Date.now();
    
    // Check if we've sent this message recently
    if (recentMessages.has(messageHash)) {
      const lastSent = recentMessages.get(messageHash)!;
      if (now - lastSent < DUPLICATE_PREVENTION_WINDOW) {
        console.log('🚫 Duplicate message detected, skipping send');
        return true; // Return true as if it was sent successfully
      }
    }
    
    // Mark this message as sent
    recentMessages.set(messageHash, now);
    
    // Clean up old entries
    for (const [hash, timestamp] of recentMessages.entries()) {
      if (now - timestamp > DUPLICATE_PREVENTION_WINDOW) {
        recentMessages.delete(hash);
      }
    }
    
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
        disable_web_page_preview: true
      }),
      // Add timeout and retry configuration
      signal: AbortSignal.timeout(30000) // 30 second timeout
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      
      // Log specific error details
      if (errorData.error_code === 400) {
        if (errorData.description?.includes('chat not found')) {
          console.error('❌ Chat not found. Please check:');
          console.error('1. Is the bot added to the group?');
          console.error('2. Is the chat ID correct? (should be negative for groups)');
          console.error('3. Does the bot have permission to send messages?');
          console.error('Current chat ID:', TELEGRAM_CHAT_ID);
        }
      }
      
      return false;
    }

    console.log('✅ Telegram message sent successfully!');
    return true;
  } catch (error) {
    console.error('Failed to send quiz results to Telegram:', error);
    
    // Handle specific error types
    if (error instanceof Error) {
      if (error.name === 'AbortError') {
        console.error('❌ Request timeout - Telegram API is not responding');
        
        // Retry logic for timeout errors
        if (retryCount < maxRetries) {
          console.log(`🔄 Retrying after timeout... (${retryCount + 1}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 2000 * (retryCount + 1))); // Longer delay for timeouts
          return sendQuizResultsToTelegram(data, retryCount + 1);
        }
      } else if (error.message.includes('ERR_CONNECTION_RESET') || 
                 error.message.includes('Failed to fetch')) {
        console.error('❌ Network error - Connection was reset or failed');
        
        // Retry logic for network errors
        if (retryCount < maxRetries) {
          console.log(`🔄 Retrying after network error... (${retryCount + 1}/${maxRetries})`);
          await new Promise(resolve => setTimeout(resolve, 1000 * (retryCount + 1))); // Exponential backoff
          return sendQuizResultsToTelegram(data, retryCount + 1);
        }
      }
    }
    
    return false;
  }
};

const formatQuizResultsMessage = (data: QuizSubmissionData): string => {
  const { userInfo, recommendations, answers, timestamp } = data;
  
  // Format user info - экранируем пользовательский ввод для защиты от XSS
  const userInfoText = `
👤 <b>Пользователь:</b> ${escapeHtml(userInfo.name) || 'Не указано'}
📧 <b>Email:</b> ${escapeHtml(userInfo.email) || 'Не указано'}
⚧ <b>Пол:</b> ${escapeHtml(userInfo.gender) || 'Не указано'}
🕐 <b>Время прохождения:</b> ${new Date(timestamp).toLocaleString('ru-RU')}
`;

  // Format wellness profile
  const wellnessProfileText = `
🎯 <b>Профиль здоровья:</b> ${recommendations.wellness_profile}
📝 <b>Описание:</b> ${recommendations.profile_description}
⭐ <b>Эффективность:</b> ${recommendations.effectiveness_score}%
`;

  // Format key benefits
  const keyBenefitsText = recommendations.key_benefits.length > 0 
    ? `\n🔑 <b>Ключевые преимущества:</b>\n${recommendations.key_benefits.map(benefit => `• ${benefit}`).join('\n')}`
    : '';

  // Format recommended products
  const productsText = recommendations.recommended_products.length > 0
    ? `\n💊 <b>Рекомендуемые продукты:</b>\n${recommendations.recommended_products.map((product, index) => 
        `${index + 1}. <b>${product.product_name}</b> (${product.category})\n   • Категория: ${product.subcategory}\n   • Оценка соответствия: ${product.match_score}%\n   • Приоритет: ${product.priority_level}\n   • Основные преимущества: ${product.main_benefits.join(', ')}\n   • Дозировка: ${product.dosage_recommendation}`
      ).join('\n\n')}`
    : '';

  // Format lifestyle insights
  const insightsText = recommendations.lifestyle_insights.length > 0
    ? `\n💡 <b>Рекомендации по образу жизни:</b>\n${recommendations.lifestyle_insights.map(insight => `• ${insight}`).join('\n')}`
    : '';

  // Format usage guidance
  const usageText = recommendations.usage_guidance
    ? `\n📋 <b>Руководство по использованию:</b>\n${recommendations.usage_guidance}`
    : '';

  // Format quiz answers summary
  const answersSummary = formatAnswersSummary(answers);

  return `🎉 <b>НОВЫЕ РЕЗУЛЬТАТЫ ОПРОСА</b> 🎉

${userInfoText}
${wellnessProfileText}${keyBenefitsText}${productsText}${insightsText}${usageText}

📊 <b>Краткая сводка ответов:</b>
${answersSummary}

---
<i>Отправлено автоматически из системы опросов Project V</i>`;
};

const formatAnswersSummary = (answers: Record<string, any>): string => {
  const importantAnswers = [
    'goals', 'climate', 'activity', 'morningEnergy', 'energyLevel', 
    'caffeineIntake', 'focusLevel', 'movementFrequency', 'dietType',
    'digestion', 'sleepQuality', 'stressLevel', 'skin-saying'
  ];

  const summary = importantAnswers
    .filter(key => answers[key] !== undefined && answers[key] !== null)
    .map(key => {
      const value = answers[key];
      const label = getAnswerLabel(key, value);
      return `• ${getQuestionLabel(key)}: ${label}`;
    })
    .join('\n');

  return summary || 'Нет данных для отображения';
};

const getQuestionLabel = (key: string): string => {
  const labels: Record<string, string> = {
    'goals': 'Цели',
    'climate': 'Климат',
    'activity': 'COVID-19',
    'morningEnergy': 'Утренняя энергия',
    'energyLevel': 'Уровень энергии',
    'caffeineIntake': 'Потребление кофеина',
    'focusLevel': 'Фокус',
    'movementFrequency': 'Физическая активность',
    'dietType': 'Тип питания',
    'digestion': 'Пищеварение',
    'sleepQuality': 'Качество сна',
    'stressLevel': 'Уровень стресса',
    'skin-saying': 'Состояние кожи'
  };
  return labels[key] || key;
};

const getAnswerLabel = (key: string, value: any): string => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }
  
  if (typeof value === 'string') {
    // Try to translate common values
    const translations: Record<string, Record<string, string>> = {
      'goals': {
        'clearer-skin': 'Чистая кожа',
        'better-digestion': 'Лучшее пищеварение',
        'less-stress': 'Меньше стресса',
        'better-sleep': 'Лучший сон',
        'sharper-focus': 'Острый фокус',
        'healthy-heart': 'Здоровое сердце',
        'longevity': 'Долголетие',
        'detox': 'Детокс',
        'natural-immunity': 'Естественный иммунитет',
        'sustained-energy': 'Постоянная энергия'
      },
      'climate': {
        'sunny-warm': 'Солнечный и теплый',
        'cool-rainy': 'Прохладный или дождливый',
        'cold-winters': 'Холодные зимы',
        'urban-polluted': 'Городской и загрязненный',
        'rural-nature': 'Сельский или близко к природе'
      },
      'morningEnergy': {
        'bright-eyed': 'Бодрый и сияющий',
        'snooze': 'Отложить один или два раза',
        'dragged': 'Вытащенный из постели самой жизнью'
      },
      'energyLevel': {
        'energized-unstoppable': 'Энергичный и неудержимый',
        'some-days-fab': 'Некоторые дни отличные',
        'low-energy': 'Низкая энергия'
      },
      'sleepQuality': {
        'like-royalty': 'Как королевская особа',
        'light-sleeper': 'Чуткий сон',
        'insomnia': 'Бессонница'
      },
      'stressLevel': {
        'breathe-space': 'Нахожу время для дыхания',
        'sometimes': 'Иногда',
        'always-on': 'Всегда включен'
      },
      'skin-saying': {
        'glowing': 'Сияющая',
        'random': 'Случайная',
        'dull': 'Тусклая'
      }
    };

    return translations[key]?.[value] || value;
  }

  return String(value);
};
