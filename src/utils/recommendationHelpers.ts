import { RecommendationResult, ProductRecommendation } from '../components/quiz-pages/quiz-results/recommendationEngine';
import { getProductContent } from '../components/product-page/ProductContent';

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
    'G': '/product-page-images/product_G/capsule_vitamins_g.png',
    
    'LV': '/product-page-images/product_LV/capsule_vitamins_lv.png',
    'BR': '/product-page-images/product_BR/capsule_vitamins_br.png',
    'OS': '/product-page-images/product_OS/capsule_vitamins_os.png',
    'ENT': '/product-page-images/product_ENT/capsule_vitamins_ent.png',
    'DR': '/product-page-images/product_DR/capsule_vitamins_dr.png',
    'VS': '/product-page-images/product_VS/capsule_vitamins_vs.png',
    'S2S': '/product-page-images/product_S2S/capsule_vitamins_s2s.png',
    'NPM': '/product-page-images/product_NPM/capsule_vitamins_npm.png',
    'MDS': '/product-page-images/product_MDS/capsule_vitamins_mds.png',
    'GQ10': '/product-page-images/product_GQ10/capsule_vitamins_gq10.png',
    'JN': '/product-page-images/product_JN/capsule_vitamins_jn.png',
    'JNB': '/product-page-images/product_JNB/capsule_vitamins_jnb.png',
    'PROGUM': '/product-page-images/product_PROGUM/capsule_vitamins_progum.png',
    'GH': '/product-page-images/product_GH/capsule_vitamins_gh.png',
    'GS': '/product-page-images/product_GS/capsule_vitamins_gs.png',
  };
  
  return imageMap[productId] || '/quiz-result-images/jar_pink_a.png';
};


export const getProductDescription = (product: ProductRecommendation): string => {
    const descriptions: Record<string, string> = {
        // Classic Hit
        'A': 'Powerful antioxidant protection that defends cells from damage, supports collagen production, and brightens skin from within. Ideal for urban living and combating environmental stressors.',
        'CH': 'Natural energy tonic with spirulina and guarana for sustained mental clarity and physical stamina without caffeine crashes. Perfect for busy professionals and students.',
        'M': 'Omega-3 complex for comprehensive heart and brain health, supporting cognitive function, memory, and cardiovascular wellness throughout aging.',
        'P': 'Calming herbal blend with lavender and melissa that naturally soothes stress and promotes restful sleep without sedative effects.',
        'SV': 'Metabolism support formula with Garcinia Cambogia for healthy weight management, appetite control, and balanced energy levels.',
        'S': 'Advanced probiotic and prebiotic complex for optimal digestive health, gut microbiome balance, and enhanced nutrient absorption.',
        'MGR': 'Magnesium-based stress relief formula that supports muscle relaxation, mood balance, and nervous system health.',
        'D': 'Comprehensive detoxification support with Cat\'s Claw to cleanse at cellular level and strengthen immune function against environmental toxins.',
        'N': 'Targeted genitourinary health support for urinary tract and kidney function with natural antiseptic and anti-inflammatory properties.',
        'G': 'Adaptogenic wellness booster with white imperial ginseng for enhanced energy, cognitive performance, and stress resistance.',
        
        // Direct Hit
        'LV': 'Premium anti-aging complex with rare antioxidants to combat premature aging, stimulate skin regeneration, and protect against environmental damage.',
        'BR': 'Advanced brain health formula supporting cognitive function, memory retention, and nervous system protection against stress.',
        'OS': 'Marine mineral and vitamin complex for bone strengthening and joint health, improving bone density and joint flexibility.',
        'ENT': 'Joint restoration formula with glucosamine and chondroitin for pain relief, cartilage support, and improved mobility.',
        'DR': 'Unique immune support formula with beta-glucans and probiotics to strengthen intestinal immunity and improve immune response.',
        'VS': 'Vascular health complex with diosmin and hesperidin to strengthen blood vessel walls, improve circulation, and reduce swelling.',
        'S2S': 'Comprehensive eye care complex with lutein and zeaxanthin for retinal protection, improved visual perception, and reduced eye fatigue.',
        'NPM': 'Targeted men\'s health support with natural ingredients for prostate health, urinary function, and hormonal balance.',
        'MDS': 'Mature women\'s complex with phytoestrogens and calcium for hormonal balance, bone health, and skin beauty during menopause.',
        'GQ10': 'Energy complex with coenzyme Q10 for cardiac function support, cellular energy production, and antioxidant protection.',
        
        // Junior Hit
        'JN': 'Vitamin-mineral complex for harmonious development of child\'s body, supporting growth, immunity, and cognitive development.',
        'JNB': 'Complex for ideal posture and bone strengthening in children, supporting skeletal development and dental health.',
        'PROGUM': 'Chewable tablets with probiotics and vitamin D3 for tooth enamel strengthening, cavity prevention, and oral health in children.',
        
        // Beauty Hit
        'GH': 'Health elixir based on honey and white imperial ginseng to increase protective properties, improve skin condition, and enhance overall vitality.',
        'GS': 'Drinking complex for inner beauty radiance with grape seed extract and hyaluronic acid to brighten age spots and stimulate collagen production.'
    };
    
    return descriptions[product.product_id] || `${product.product_name} supports your wellness goals with targeted benefits for ${product.main_benefits.join(', ')}.`;
};

export type ExpectedOutcome = {
    text: string;
    icon: string;
};

export const getExpectedOutcomes = (recommendations: RecommendationResult): ExpectedOutcome[] => {
    const outcomes: ExpectedOutcome[] = [];
    const benefits = recommendations.key_benefits;
    const profile = recommendations.wellness_profile;

    // Basic outcomes based on benefits
    if (benefits.some(b => b.includes('stress') || b.includes('relax'))) {
        outcomes.push({
            text: 'Reduced stress and improved emotional balance',
            icon: 'stress-relief'
        });
    }
    if (benefits.some(b => b.includes('energy') || b.includes('vitality'))) {
        outcomes.push({
            text: 'Increased energy and physical vitality',
            icon: 'energy'
        });
    }
    if (benefits.some(b => b.includes('sleep'))) {
        outcomes.push({
            text: 'Deeper, more restorative sleep',
            icon: 'sleep'
        });
    }
    if (benefits.some(b => b.includes('focus') || b.includes('cognitive'))) {
        outcomes.push({
            text: 'Enhanced mental focus and clarity',
            icon: 'brain'
        });
    }
    if (benefits.some(b => b.includes('immune') || b.includes('detox'))) {
        outcomes.push({
            text: 'Strengthened immune defenses',
            icon: 'immune'
        });
    }
    if (benefits.some(b => b.includes('skin') || b.includes('radiance'))) {
        outcomes.push({
            text: 'Improved skin radiance and complexion',
            icon: 'skin'
        });
    }
    if (benefits.some(b => b.includes('digestion') || b.includes('gut'))) {
        outcomes.push({
            text: 'Better digestion and gut health',
            icon: 'digestion'
        });
    }
    if (benefits.some(b => b.includes('heart') || b.includes('cardiovascular'))) {
        outcomes.push({
            text: 'Improved cardiovascular function',
            icon: 'heart'
        });
    }

    // Unique outcomes based on profile
    if (profile === 'The Balancer' && !outcomes.some(o => o.text.includes('stress'))) {
        outcomes.push({
            text: 'Enhanced stress resilience',
            icon: 'balance'
        });
    }
    if (profile === 'The Energizer' && !outcomes.some(o => o.text.includes('energy'))) {
        outcomes.push({
            text: 'Sustained mental and physical performance',
            icon: 'performance'
        });
    }
    if (profile === 'The Growing Mind') {
        outcomes.push({
            text: 'Harmonious development and growth',
            icon: 'growth'
        });
        outcomes.push({
            text: 'Cognitive function support',
            icon: 'brain'
        });
    }

    return outcomes.slice(0, 4);
};

export const getProductIngredients = (productId: string): string => {
    const content = getProductContent(productId);
    if (!content.ingredients.length) return 'Natural ingredients';
    return content.ingredients.map(ing => ing.title).join(', ');
};

export type IngredientItem = {
  title: string;
  imageSrc: string;
  amount?: string;
};

export const getProductIngredientItems = (productId: string): IngredientItem[] => {
  const content = getProductContent(productId);
  return content.ingredients.map(ing => ({
    title: ing.title,
    imageSrc: ing.imageSrc,
    amount: ing.amount,
  }));
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


export const getQuizDuration = (answers: Record<string, any>): string => {
  const startTime = answers.quizStartTime;
  if (!startTime) {
    return "09:55"; // Fallback to default time
  }
  
  const start = new Date(startTime);
  // Use quiz end time if available (quiz completed), otherwise use current time (quiz in progress)
  const endTime = answers.quizEndTime ? new Date(answers.quizEndTime) : new Date();
  const durationMs = endTime.getTime() - start.getTime();
  
  const minutes = Math.floor(durationMs / 60000);
  const seconds = Math.floor((durationMs % 60000) / 1000);
  
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

export const getOutcomeIcon = (iconType: string): string => {
  const icons: Record<string, string> = {
    'stress-relief': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00A8E2"/>
    </svg>`,
    'energy': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 2v11h3v9l7-12h-4l4-8z" fill="#00A8E2"/>
    </svg>`,
    'sleep': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-13.5-6.41-13.5-13.5 0-.75.07-1.48.18-2.18z" fill="#00A8E2"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#00A8E2"/>
    </svg>`,
    'brain': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#00A8E2"/>
      <circle cx="8" cy="8" r="1.5" fill="#00A8E2"/>
      <circle cx="16" cy="8" r="1.5" fill="#00A8E2"/>
      <path d="M12 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#00A8E2"/>
    </svg>`,
    'immune': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00A8E2"/>
      <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L16 15l-3-1.5L10 15l1.5-3L9 9.5l3.5-1.5z" fill="#00A8E2"/>
    </svg>`,
    'skin': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00A8E2"/>
      <circle cx="12" cy="12" r="3" fill="#00A8E2"/>
    </svg>`,
    'digestion': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00A8E2"/>
      <path d="M8 9h8v2H8V9zm0 3h8v2H8v-2zm0 3h5v2H8v-2z" fill="#00A8E2"/>
    </svg>`,
    'heart': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#00A8E2"/>
    </svg>`,
    'balance': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="#00A8E2"/>
      <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#00A8E2"/>
    </svg>`,
    'performance': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00A8E2"/>
      <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L16 15l-3-1.5L10 15l1.5-3L9 9.5l3.5-1.5z" fill="#00A8E2"/>
    </svg>`,
    'growth': `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#00A8E2"/>
      <path d="M12 6l1.5 3L17 9.5l-2.5 2.5L16 15l-3-1.5L10 15l1.5-3L9 9.5l3.5-1.5z" fill="#00A8E2"/>
    </svg>`
  };
  
  return icons[iconType] || icons['brain'];
};
