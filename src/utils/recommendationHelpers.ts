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

export const getExpectedOutcomes = (recommendations: RecommendationResult): string[] => {
    const outcomes: string[] = [];
    const benefits = recommendations.key_benefits;
    const profile = recommendations.wellness_profile;

    // Basic outcomes based on benefits
    if (benefits.some(b => b.includes('stress') || b.includes('relax'))) {
        outcomes.push('Reduced stress and improved emotional balance');
    }
    if (benefits.some(b => b.includes('energy') || b.includes('vitality'))) {
        outcomes.push('Increased energy and physical vitality');
    }
    if (benefits.some(b => b.includes('sleep'))) {
        outcomes.push('Deeper, more restorative sleep');
    }
    if (benefits.some(b => b.includes('focus') || b.includes('cognitive'))) {
        outcomes.push('Enhanced mental focus and clarity');
    }
    if (benefits.some(b => b.includes('immune') || b.includes('detox'))) {
        outcomes.push('Strengthened immune defenses');
    }
    if (benefits.some(b => b.includes('skin') || b.includes('radiance'))) {
        outcomes.push('Improved skin radiance and complexion');
    }
    if (benefits.some(b => b.includes('digestion') || b.includes('gut'))) {
        outcomes.push('Better digestion and gut health');
    }
    if (benefits.some(b => b.includes('heart') || b.includes('cardiovascular'))) {
        outcomes.push('Improved cardiovascular function');
    }

    // Unique outcomes based on profile
    if (profile === 'The Balancer' && !outcomes.some(o => o.includes('stress'))) {
        outcomes.push('Enhanced stress resilience');
    }
    if (profile === 'The Energizer' && !outcomes.some(o => o.includes('energy'))) {
        outcomes.push('Sustained mental and physical performance');
    }
    if (profile === 'The Growing Mind') {
        outcomes.push('Harmonious development and growth');
        outcomes.push('Cognitive function support');
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
