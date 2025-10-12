// Test file for Telegram functionality
import { sendQuizResultsToTelegram, QuizSubmissionData } from './telegramSender';

// Test data for Telegram sending
export const testQuizSubmission: QuizSubmissionData = {
  answers: {
    name: 'Тестовый Пользователь',
    email: 'test@example.com',
    age: 30,
    gender: 'female',
    goals: ['clearer-skin', 'better-sleep'],
    climate: 'urban-polluted',
    activity: 'yes',
    morningEnergy: 'bright-eyed',
    energyLevel: 'some-days-fab',
    caffeineIntake: '1-2-cups',
    focusLevel: 'laser-sharp',
    movementFrequency: 'daily',
    dietType: 'fresh-vibrant',
    digestion: 'balanced-breezy',
    sleepQuality: 'like-royalty',
    stressLevel: 'breathe-space',
    'skin-saying': 'glowing'
  },
  recommendations: {
    recommended_products: [
      {
        product_id: 'A',
        product_name: 'Test Product A',
        category: 'Classic Hit',
        subcategory: 'General Wellness',
        main_benefits: ['immune_support', 'energy'],
        match_score: 85,
        reasoning: ['Perfect for your lifestyle', 'High energy support'],
        priority_level: 'high',
        effectiveness_estimate: 80,
        dosage_recommendation: '1-2 capsules daily'
      },
      {
        product_id: 'B',
        product_name: 'Test Product B',
        category: 'Beauty Hit',
        subcategory: 'Skin Care',
        main_benefits: ['skin_health', 'anti_aging'],
        match_score: 75,
        reasoning: ['Great for skin health', 'Anti-aging benefits'],
        priority_level: 'medium',
        effectiveness_estimate: 70,
        dosage_recommendation: '1 ampoule daily'
      }
    ],
    effectiveness_score: 78,
    key_benefits: ['immune support', 'energy', 'skin health'],
    wellness_profile: 'The Radiant',
    profile_description: 'You embrace beauty from within, nurturing your skin and overall radiance through cellular health.',
    recommended_kits: ['Beauty & Radiance Collection'],
    lifestyle_insights: [
      'Regular stress reduction practices like meditation or yoga can significantly improve your overall condition.',
      'Balanced nutrition with emphasis on fresh vegetables and fruits will support your health at cellular level.'
    ],
    usage_guidance: 'Take products regularly according to recommendations to achieve optimal results.'
  },
  timestamp: new Date().toISOString(),
  userInfo: {
    name: 'Тестовый Пользователь',
    email: 'test@example.com',
    age: 30,
    gender: 'female'
  }
};

// Function to test Telegram sending
export const testTelegramSending = async (): Promise<boolean> => {
  try {
    console.log('Testing Telegram sending...');
    const success = await sendQuizResultsToTelegram(testQuizSubmission);
    
    if (success) {
      console.log('✅ Telegram test successful!');
    } else {
      console.log('❌ Telegram test failed!');
    }
    
    return success;
  } catch (error) {
    console.error('❌ Telegram test error:', error);
    return false;
  }
};

// Function to test with real quiz data (if available)
export const testWithRealData = async (answers: Record<string, any>, recommendations: any): Promise<boolean> => {
  try {
    const submissionData: QuizSubmissionData = {
      answers,
      recommendations,
      timestamp: new Date().toISOString(),
      userInfo: {
        name: answers.name,
        email: answers.email,
        age: answers.age,
        gender: answers.gender
      }
    };
    
    console.log('Testing Telegram with real data...');
    const success = await sendQuizResultsToTelegram(submissionData);
    
    if (success) {
      console.log('✅ Real data Telegram test successful!');
    } else {
      console.log('❌ Real data Telegram test failed!');
    }
    
    return success;
  } catch (error) {
    console.error('❌ Real data Telegram test error:', error);
    return false;
  }
};
