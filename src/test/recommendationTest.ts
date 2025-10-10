import { ProjectVRecommendationEngine } from '../components/quiz-pages/quiz-results/recommendationEngine';

// Test cases for the recommendation engine
const testCases = [
  {
    name: "High stress, low energy user",
    answers: {
      gender: "female",
      age: 35,
      goals: ["less-stress", "better-sleep", "sustained-energy"],
      climate: "urban-polluted",
      activity: "no",
      morningEnergy: "dragged",
      energyLevel: "low-energy",
      caffeineIntake: "more-4-cups",
      focusLevel: "where-am",
      movementFrequency: "choreography",
      jointsMuscles: "stiff-sore",
      stiffnessInflammation: "constant-tension",
      dietType: "mostly-beige",
      cravings: "sugar-spirit-animal",
      plate: "all-beige",
      "antioxidant-rich": "rarely",
      digestion: "constant-bloat",
      detox: "only-post-indulgence",
      "sugar-status": "constant-cravings",
      sleepQuality: "insomnia",
      stressLevel: "always-on",
      stressManagement: "chocolate-chaos",
      "self-care": "not-really",
      "skin-saying": "dull",
      alcohol: "daily",
      smoking: "let-s-not-talk-about-it",
      "sugar-drinks": "daily-dose-of-bubble-tea",
      environment: "concrete-jungle",
      "fresh-air": "rarely",
      "sunlight-exposure": "barely-any",
      "pollution-exposure": "i-breathe-it-in",
      "nature-escapes": "what-s-that",
      "disconnect-from-tech": "always-online"
    }
  },
  {
    name: "Healthy, active user",
    answers: {
      gender: "male",
      age: 28,
      goals: ["healthy-heart", "sharper-focus", "longevity"],
      climate: "rural-nature",
      activity: "no",
      morningEnergy: "bright-eyed",
      energyLevel: "energized-unstoppable",
      caffeineIntake: "dont-drink",
      focusLevel: "laser-sharp",
      movementFrequency: "daily",
      jointsMuscles: "flexible-fierce",
      stiffnessInflammation: "stretch-cool",
      dietType: "fresh-vibrant",
      cravings: "balanced-chic",
      plate: "colorful-veggie-forward",
      "antioxidant-rich": "daily",
      digestion: "balanced-breezy",
      detox: "daily",
      "sugar-status": "balanced",
      sleepQuality: "like-royalty",
      stressLevel: "breathe-space",
      stressManagement: "zen-rituals",
      "self-care": "weekly-luxe-rituals",
      "skin-saying": "glowing",
      alcohol: "rarely",
      smoking: "none",
      "sugar-drinks": "almost-never",
      environment: "daily",
      "fresh-air": "yes",
      "sunlight-exposure": "20+ minutes",
      "pollution-exposure": "i-detox-regularly",
      "nature-escapes": "monthly",
      "disconnect-from-tech": "off-grid-goddess"
    }
  },
  {
    name: "Middle-aged professional with moderate issues",
    answers: {
      gender: "female",
      age: 45,
      goals: ["better-digestion", "clearer-skin", "natural-immunity"],
      climate: "cool-rainy",
      activity: "yes",
      morningEnergy: "snooze",
      energyLevel: "some-days-fab",
      caffeineIntake: "1-2-cups",
      focusLevel: "Decent-drifty",
      movementFrequency: "few-times",
      jointsMuscles: "on-off",
      stiffnessInflammation: "mild-soreness",
      dietType: "mixed-greens-convenience",
      cravings: "sweet-salty",
      plate: "half-vibrant-bland",
      "antioxidant-rich": "a-few-times",
      digestion: "unpredictable",
      detox: "weekly",
      "sugar-status": "dips-spikes",
      sleepQuality: "light-sleeper",
      stressLevel: "sometimes",
      stressManagement: "hopping-therapy",
      "self-care": "trying-my-best",
      "skin-saying": "random",
      alcohol: "weekends",
      smoking: "a-few",
      "sugar-drinks": "sometimes",
      environment: "weekends",
      "fresh-air": "sometimes",
      "sunlight-exposure": "some-days",
      "pollution-exposure": "try",
      "nature-escapes": "sometimes",
      "disconnect-from-tech": "half-scrolling"
    }
  }
];

export function runRecommendationTests() {
  const engine = new ProjectVRecommendationEngine();
  
  console.log("🧪 Testing Recommendation Engine");
  console.log("=====================================");
  
  testCases.forEach((testCase, index) => {
    console.log(`\n📋 Test Case ${index + 1}: ${testCase.name}`);
    console.log("-------------------------------------");
    
    try {
      const result = engine.getRecommendations(testCase.answers);
      
      console.log(`✅ Effectiveness Score: ${result.effectiveness_score}%`);
      console.log(`📊 Total Raw Score: ${result.total_raw_score}`);
      console.log(`🎯 Key Benefits: ${result.key_benefits.join(", ")}`);
      console.log("\n🏆 Recommended Products:");
      
      result.recommended_products.forEach((product, idx) => {
        console.log(`  ${idx + 1}. ${product.product_name}`);
        console.log(`     Score: ${product.score}`);
        console.log(`     Match: ${product.match_percentage}%`);
        console.log(`     Price: €${product.price_eur}`);
        console.log(`     Benefits: ${product.main_benefits.join(", ")}`);
        console.log("");
      });
      
      // Validate results
      if (result.recommended_products.length !== 3) {
        console.log("❌ ERROR: Expected 3 recommendations, got", result.recommended_products.length);
      }
      
      if (result.effectiveness_score < 60 || result.effectiveness_score > 100) {
        console.log("❌ ERROR: Effectiveness score out of range:", result.effectiveness_score);
      }
      
      if (result.key_benefits.length === 0) {
        console.log("❌ ERROR: No key benefits identified");
      }
      
    } catch (error) {
      console.log("❌ ERROR:", error);
    }
  });
  
  console.log("\n🏁 Testing Complete");
}

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
  runRecommendationTests();
}
