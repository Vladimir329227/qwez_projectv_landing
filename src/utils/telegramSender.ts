// Telegram Bot API configuration
const TELEGRAM_BOT_TOKEN = "8010738456:AAEoag7AQtUnTAvAzMJVHJ3DYUXnA0b8MO4";
const TELEGRAM_CHAT_ID = "1924632942";

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

export const sendQuizResultsToTelegram = async (data: QuizSubmissionData): Promise<boolean> => {
  try {
    // Format the message for Telegram
    const message = formatQuizResultsMessage(data);
    
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
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Telegram API error:', errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Failed to send quiz results to Telegram:', error);
    return false;
  }
};

const formatQuizResultsMessage = (data: QuizSubmissionData): string => {
  const { userInfo, recommendations, answers, timestamp } = data;
  
  // Format user info
  const userInfoText = `
👤 <b>Пользователь:</b> ${userInfo.name || 'Не указано'}
📧 <b>Email:</b> ${userInfo.email || 'Не указано'}
👶 <b>Возраст:</b> ${userInfo.age || 'Не указано'}
⚧ <b>Пол:</b> ${userInfo.gender || 'Не указано'}
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
