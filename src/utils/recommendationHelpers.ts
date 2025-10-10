import { RecommendationResult, ProductRecommendation } from '../components/quiz-pages/quiz-results/recommendationEngine';

export const getProductImage = (productId: string): string => {
  const imageMap: Record<string, string> = {
    'A': '/quiz-result-images/jar_pink_a.png',
    'CH': '/quiz-result-images/jar_red_ch.png',
    'M': '/quiz-result-images/jar_blue_m.png',
    'P': '/quiz-result-images/jar_purple_p.png',
    'SV': '/quiz-result-images/jar_green_sv.png',
    'S': '/quiz-result-images/jar_blue_s.png',
    'MGR': '/quiz-result-images/jar_orange_mgr.png',
    'D': '/quiz-result-images/jar_green_d.png',
    'N': '/quiz-result-images/jar_purple_n.png',
    'G': '/quiz-result-images/jar_yellow_g.png'
  };
  
  return imageMap[productId] || '/quiz-result-images/jar_pink_a.png';
};

export const getProductImage2 = (productId: string): string => {
  const imageMap: Record<string, string> = {
    'A': '/product-page-images/product_A/capsule_vitamins_a.png',
    'CH': '/product-page-images/product_CH/capsule_vitamins_ch.png',
    'M': '/product-page-images/product_M/capsule_vitamins_m.png',
    'P': '/product-page-images/product_P/capsule_vitamins_p.png',
    'SV': '/product-page-images/product_SV/capsule_vitamins_sv.png',
    'S': '/product-page-images/product_S/capsule_vitamins_s.png',
    'MGR': '/product-page-images/product_MGR/capsule_vitamins_mgr.png',
    'D': '/product-page-images/product_D/capsule_vitamins_d.png',
    'N': '/product-page-images/product_N/capsule_vitamins_n.png',
    'G': '/product-page-images/product_G/capsule_vitamins_G.png'
  };
  
  return imageMap[productId] || '/quiz-result-images/jar_pink_a.png';
};


export const getProductIngredients = (productId: string): string => {
  const ingredientsMap: Record<string, string> = {
    'A': 'Grape Seed, C, E, Zinc',
    'CH': 'Guarana, Spirulina',
    'M': 'Omega-3, EPA, DHA',
    'P': 'Lavender, Melissa, Valerian',
    'SV': 'Garcinia, Green Tea, Chromium',
    'S': 'FOS, Probiotics',
    'MGR': 'Magnesium, St. John\'s Wort',
    'D': 'Cat\'s Claw, Ginger',
    'N': 'Angelica, Cherry Stalks',
    'G': 'Ginseng, Ginger'
  };
  
  return ingredientsMap[productId] || 'Natural ingredients';
};

export const getProductDescription = (product: ProductRecommendation): string => {
  const descriptions: Record<string, string> = {
    'A': 'Protects cells from damage, supports collagen, and brightens the skin from within.',
    'CH': 'Gives you focused alertness—without spikes or crashes and enhances stamina and recovery.',
    'M': 'Supports heart health and cognitive function for better focus and memory.',
    'P': 'Soothes stress without sedating.',
    'SV': 'Supports healthy metabolism and weight management.',
    'S': 'Improves digestive health and gut microbiome balance.',
    'MGR': 'Reduces stress and supports mood balance naturally.',
    'D': 'Supports natural detoxification and immune function.',
    'N': 'Promotes urinary and kidney health.',
    'G': 'Enhances energy and cognitive performance.'
  };
  
  return descriptions[product.product_id] || product.main_benefits[0] || 'Supports your wellness goals.';
};

export const getWellnessProfile = (recommendations: RecommendationResult): string => {
  const topBenefits = recommendations.key_benefits;
  
  if (topBenefits.includes('stress reduction') || topBenefits.includes('sleep')) {
    return 'The Icon';
  }
  if (topBenefits.includes('energy') || topBenefits.includes('focus')) {
    return 'The Energizer';
  }
  if (topBenefits.includes('antioxidant') || topBenefits.includes('detox')) {
    return 'The Purifier';
  }
  if (topBenefits.includes('heart') || topBenefits.includes('cardiovascular')) {
    return 'The Guardian';
  }
  
  return 'The Icon';
};

export const getWellnessDescription = (recommendations: RecommendationResult): string => {
  const topBenefits = recommendations.key_benefits;
  
  if (topBenefits.includes('stress reduction') || topBenefits.includes('sleep')) {
    return 'You are the embodiment of wellness elegance.';
  }
  if (topBenefits.includes('energy') || topBenefits.includes('focus')) {
    return 'You radiate vitality and mental clarity.';
  }
  if (topBenefits.includes('antioxidant') || topBenefits.includes('detox')) {
    return 'You embrace natural purification and cellular renewal.';
  }
  if (topBenefits.includes('heart') || topBenefits.includes('cardiovascular')) {
    return 'You prioritize long-term health and vitality.';
  }
  
  return 'You are the embodiment of wellness elegance.';
};

export const getExpectedOutcomes = (recommendations: RecommendationResult): string[] => {
  const outcomes: string[] = [];
  const topBenefits = recommendations.key_benefits;
  
  if (topBenefits.includes('energy') || topBenefits.includes('focus')) {
    outcomes.push('Increased energy focus');
  }
  if (topBenefits.includes('antioxidant') || topBenefits.includes('detox')) {
    outcomes.push('Reduced inflammation');
  }
  if (topBenefits.includes('sleep') || topBenefits.includes('stress')) {
    outcomes.push('Improved sleep quality');
  }
  if (topBenefits.includes('heart') || topBenefits.includes('cardiovascular')) {
    outcomes.push('Better heart health');
  }
  if (topBenefits.includes('digestion') || topBenefits.includes('gut')) {
    outcomes.push('Improved digestion');
  }
  if (topBenefits.includes('immune') || topBenefits.includes('immunity')) {
    outcomes.push('Enhanced immunity');
  }
  
  // Fill with default outcomes if we don't have enough
  const defaultOutcomes = [
    'Increased energy focus',
    'Reduced inflammation', 
    'Improved sleep quality'
  ];
  
  while (outcomes.length < 3 && outcomes.length < defaultOutcomes.length) {
    const nextDefault = defaultOutcomes[outcomes.length];
    if (!outcomes.includes(nextDefault)) {
      outcomes.push(nextDefault);
    }
  }
  
  return outcomes.slice(0, 3);
};

export const getQuizDuration = (answers: Record<string, any>): string => {
  const startTime = answers.quizStartTime;
  if (!startTime) {
    return "09:55"; // Fallback to default time
  }
  
  const start = new Date(startTime);
  const end = new Date();
  const durationMs = end.getTime() - start.getTime();
  
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};
