// src/data/projectVProducts.ts
export interface Product {
    id: string;
    name: string;
    category: string;
    subcategory: string;
    price_eur: number;
    capsules: number;
    main_purpose: string;
    primary_benefits: string[];
    secondary_benefits: string[];
    target_goals: string[];
    target_demographics: {
        age_preference: {
            min: number;
            max: number;
            optimal: [number, number];
        };
        gender_preference: string;
        lifestyle_factors: string[];
    };
    health_benefits: string[];
    key_ingredients: string[];
    contraindications: string[];
    scoring_factors: {
        goals_match: Record<string, number>;
        symptoms_match: Record<string, number>;
        lifestyle_match: Record<string, number>;
        demographics_match: Record<string, number>;
        stress_factors?: Record<string, number>;
        energy_factors?: Record<string, number>;
        sleep_factors?: Record<string, number>;
        digestion_factors?: Record<string, number>;
        skin_factors?: Record<string, number>;
        immunity_factors?: Record<string, number>;
        detox_factors?: Record<string, number>;
        cognitive_factors?: Record<string, number>;
        heart_factors?: Record<string, number>;
        joint_factors?: Record<string, number>;
        bone_factors?: Record<string, number>;
        hormonal_factors?: Record<string, number>;
        vision_factors?: Record<string, number>;
        urinary_factors?: Record<string, number>;
        prostate_factors?: Record<string, number>;
        menopausal_factors?: Record<string, number>;
        growth_factors?: Record<string, number>;
        development_factors?: Record<string, number>;
        dental_factors?: Record<string, number>;
        beauty_factors?: Record<string, number>;
        contraindications?: Record<string, number>;
    };
}

export interface ProductsData {
    products: Product[];
}

export const productsData: ProductsData = {
    products: [
        // === CLASSIC HIT ===
        {
            id: "A",
            name: "A | Antioxidant Power",
            category: "Classic Hit",
            subcategory: "Antioxidants & Cellular Protection",
            price_eur: 34,
            capsules: 30,
            main_purpose: "Antioxidant protection and cellular health",
            primary_benefits: ["antioxidant", "skin_health", "immune_support", "cellular_protection"],
            secondary_benefits: ["anti_aging", "detox", "cardiovascular_health"],
            target_goals: ["clearer-skin", "natural-immunity", "longevity", "detox"],
            target_demographics: {
                age_preference: { min: 25, max: 70, optimal: [30, 60] },
                gender_preference: "both",
                lifestyle_factors: ["urban-polluted", "high-stress", "poor-diet"]
            },
            health_benefits: [
                "powerful antioxidant protection",
                "cellular regeneration",
                "anti-aging effects",
                "skin brightening",
                "immune system support"
            ],
            key_ingredients: ["Grape Seed Extract", "Vitamin C", "Zinc", "Vitamin E", "Selenium"],
            contraindications: ["none"],
            scoring_factors: {
                goals_match: {
                    "clearer-skin": 2.5,
                    "natural-immunity": 2.0,
                    "longevity": 1.8,
                    "detox": 2.2
                },
                symptoms_match: {
                    "skin-dull": 2.0,
                    "high-stress": 1.5,
                    "low-immunity": 1.8,
                    "pollution-exposure": 2.5
                },
                lifestyle_match: {
                    "urban-polluted": 2.2,
                    "poor-diet": 1.5,
                    "high-stress-lifestyle": 1.8,
                    "smoking": 2.0
                },
                demographics_match: {
                    "age_30_60": 1.5,
                    "female": 1.2,
                    "male": 1.0
                },
                skin_factors: {
                    "dull": 2.0,
                    "aging": 1.8,
                    "sensitive": 1.5
                },
                immunity_factors: {
                    "frequent-illness": 1.8,
                    "slow-recovery": 1.5
                }
            }
        },
        {
            id: "CH",
            name: "CH | Charged and Energized",
            category: "Classic Hit",
            subcategory: "Energy & Mental Performance",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Energy boost and mental vitality",
            primary_benefits: ["energy", "mental_clarity", "focus", "stamina"],
            secondary_benefits: ["stress_resistance", "immune_support", "recovery"],
            target_goals: ["sustained-energy", "sharper-focus", "less-stress", "natural-immunity"],
            target_demographics: {
                age_preference: { min: 18, max: 55, optimal: [25, 45] },
                gender_preference: "both",
                lifestyle_factors: ["busy-lifestyle", "mental-work", "low-energy"]
            },
            health_benefits: [
                "increased energy levels",
                "improved mental performance",
                "enhanced physical endurance",
                "stress resistance",
                "faster recovery"
            ],
            key_ingredients: ["Spirulina", "Guarana", "Eleutherococcus", "Vitamin C", "Chromium"],
            contraindications: ["high-caffeine-sensitivity", "hypertension"],
            scoring_factors: {
                goals_match: {
                    "sustained-energy": 2.8,
                    "sharper-focus": 2.5,
                    "less-stress": 1.5,
                    "natural-immunity": 1.2
                },
                symptoms_match: {
                    "low-energy": 2.5,
                    "poor-focus": 2.2,
                    "mental-fatigue": 2.0,
                    "physical-fatigue": 1.8
                },
                lifestyle_match: {
                    "busy-lifestyle": 2.0,
                    "mental-work": 1.8,
                    "physical-activity": 1.5,
                    "irregular-sleep": 1.2
                },
                demographics_match: {
                    "age_25_45": 1.8,
                    "student": 1.5,
                    "professional": 1.3
                },
                energy_factors: {
                    "morning-fatigue": 2.2,
                    "afternoon-slump": 2.0,
                    "constant-tiredness": 1.8
                },
                cognitive_factors: {
                    "poor-concentration": 2.5,
                    "brain-fog": 2.2,
                    "memory-issues": 1.5
                },
                contraindications: {
                    "high-caffeine": 0.3,
                    "anxiety": 0.5,
                    "sleep-issues": 0.7
                }
            }
        },
        {
            id: "M",
            name: "M | Healthy Heart and Sharp Mind",
            category: "Classic Hit",
            subcategory: "Cardiovascular & Cognitive Health",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Cardiovascular and brain health support",
            primary_benefits: ["heart_health", "brain_health", "cognitive_function", "anti_inflammatory"],
            secondary_benefits: ["memory", "circulation", "mood_support"],
            target_goals: ["healthy-heart", "sharper-focus", "longevity", "better-sleep"],
            target_demographics: {
                age_preference: { min: 30, max: 80, optimal: [40, 70] },
                gender_preference: "both",
                lifestyle_factors: ["sedentary", "high-stress", "family-history-heart"]
            },
            health_benefits: [
                "cardiovascular health support",
                "brain function improvement",
                "memory enhancement",
                "reduced inflammation",
                "cholesterol management"
            ],
            key_ingredients: ["Omega-3", "EPA", "DHA"],
            contraindications: ["fish-allergy", "blood-thinners"],
            scoring_factors: {
                goals_match: {
                    "healthy-heart": 2.8,
                    "sharper-focus": 2.2,
                    "longevity": 2.0,
                    "better-sleep": 1.2
                },
                symptoms_match: {
                    "high-stress": 1.5,
                    "poor-memory": 1.8,
                    "circulation-issues": 2.0,
                    "inflammation": 1.5
                },
                lifestyle_match: {
                    "sedentary": 1.8,
                    "high-stress-lifestyle": 1.5,
                    "poor-diet": 1.2,
                    "family-history": 2.0
                },
                demographics_match: {
                    "age_40_70": 2.0,
                    "male_over_50": 1.8,
                    "female_post_menopause": 1.5
                },
                heart_factors: {
                    "high-blood-pressure": 2.2,
                    "high-cholesterol": 2.5,
                    "family-history-heart": 1.8
                },
                cognitive_factors: {
                    "memory-concerns": 2.0,
                    "focus-issues": 1.8,
                    "brain-fog": 1.5
                }
            }
        },
        {
            id: "P",
            name: "P | Nervous System Balance",
            category: "Classic Hit",
            subcategory: "Stress & Sleep Support",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Stress relief and nervous system support",
            primary_benefits: ["stress_reduction", "sleep_quality", "relaxation", "anxiety_relief"],
            secondary_benefits: ["mood_balance", "nervous_system", "calming"],
            target_goals: ["less-stress", "better-sleep", "sharper-focus"],
            target_demographics: {
                age_preference: { min: 18, max: 65, optimal: [25, 55] },
                gender_preference: "both",
                lifestyle_factors: ["high-stress", "poor-sleep", "anxiety"]
            },
            health_benefits: [
                "stress reduction",
                "improved sleep quality",
                "anxiety relief",
                "nervous system support",
                "emotional balance"
            ],
            key_ingredients: ["Lavender", "Melissa", "Valerian", "B Vitamins"],
            contraindications: ["pregnancy", "sedative-medications"],
            scoring_factors: {
                goals_match: {
                    "less-stress": 2.8,
                    "better-sleep": 2.5,
                    "sharper-focus": 1.5
                },
                symptoms_match: {
                    "high-stress": 2.5,
                    "poor-sleep": 2.2,
                    "anxiety": 2.0,
                    "irritability": 1.8
                },
                lifestyle_match: {
                    "high-stress-lifestyle": 2.2,
                    "poor-sleep-habits": 2.0,
                    "busy-mind": 1.8,
                    "work-pressure": 1.5
                },
                demographics_match: {
                    "age_25_55": 1.5,
                    "professional": 1.3,
                    "caregiver": 1.2
                },
                stress_factors: {
                    "always-stressed": 2.5,
                    "poor-stress-management": 2.2,
                    "burnout-tendency": 2.0
                },
                sleep_factors: {
                    "insomnia": 2.5,
                    "light-sleeper": 2.0,
                    "waking-tired": 1.8
                }
            }
        },
        {
            id: "SV",
            name: "SV | Joyful and Beautiful",
            category: "Classic Hit",
            subcategory: "Metabolism & Weight Management",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Weight management and metabolism support",
            primary_benefits: ["metabolism", "weight_management", "appetite_control", "energy_balance"],
            secondary_benefits: ["fat_burning", "blood_sugar", "detox"],
            target_goals: ["clearer-skin", "better-digestion", "sustained-energy"],
            target_demographics: {
                age_preference: { min: 20, max: 60, optimal: [25, 50] },
                gender_preference: "both",
                lifestyle_factors: ["weight-concerns", "poor-diet", "sedentary"]
            },
            health_benefits: [
                "metabolism support",
                "weight management",
                "appetite control",
                "fat burning",
                "blood sugar regulation"
            ],
            key_ingredients: ["Garcinia Cambogia", "Green Tea", "Chromium", "Fucus Vesiculosus"],
            contraindications: ["pregnancy", "diabetes-medications"],
            scoring_factors: {
                goals_match: {
                    "clearer-skin": 1.5,
                    "better-digestion": 1.8,
                    "sustained-energy": 2.0
                },
                symptoms_match: {
                    "weight-concerns": 2.5,
                    "poor-metabolism": 2.2,
                    "cravings": 2.0,
                    "low-energy": 1.8
                },
                lifestyle_match: {
                    "sedentary": 2.0,
                    "poor-diet": 1.8,
                    "sugar-cravings": 2.2,
                    "emotional-eating": 1.5
                },
                demographics_match: {
                    "age_25_50": 1.5,
                    "post-pregnancy": 1.3,
                    "metabolic-slowdown": 1.8
                },
                digestion_factors: {
                    "slow-metabolism": 2.5,
                    "bloating": 1.5,
                    "cravings": 2.0
                }
            }
        },
        {
            id: "S",
            name: "S | Ease of Digestion",
            category: "Classic Hit",
            subcategory: "Digestive Health & Gut Microbiome",
            price_eur: 34,
            capsules: 30,
            main_purpose: "Digestive health and gut microbiome balance",
            primary_benefits: ["digestion", "gut_health", "immune_support", "nutrient_absorption"],
            secondary_benefits: ["bloating_reduction", "microbiome_balance", "detox"],
            target_goals: ["better-digestion", "natural-immunity", "detox"],
            target_demographics: {
                age_preference: { min: 16, max: 80, optimal: [25, 65] },
                gender_preference: "both",
                lifestyle_factors: ["poor-diet", "antibiotic-use", "digestive-issues"]
            },
            health_benefits: [
                "digestive health improvement",
                "gut microbiome support",
                "immune system strengthening",
                "nutrient absorption enhancement",
                "bloating reduction"
            ],
            key_ingredients: ["FOS", "Lactobacillus Rhamnosus", "Probiotic Complex"],
            contraindications: ["severe-immune-deficiency"],
            scoring_factors: {
                goals_match: {
                    "better-digestion": 2.8,
                    "natural-immunity": 2.0,
                    "detox": 1.5
                },
                symptoms_match: {
                    "bloating": 2.5,
                    "digestive-discomfort": 2.2,
                    "irregular-bowels": 2.0,
                    "food-sensitivities": 1.8
                },
                lifestyle_match: {
                    "poor-diet": 2.0,
                    "antibiotic-history": 1.8,
                    "travel-frequently": 1.5,
                    "stress-eating": 1.2
                },
                demographics_match: {
                    "all_ages": 1.0,
                    "digestive-issues": 1.8
                },
                digestion_factors: {
                    "constant-bloat": 2.5,
                    "irregularity": 2.2,
                    "food-intolerances": 1.8,
                    "antibiotic-use": 2.0
                },
                immunity_factors: {
                    "frequent-illness": 1.5,
                    "slow-recovery": 1.2
                }
            }
        },
        {
            id: "MGR",
            name: "MGR | Magic of Magnesium",
            category: "Classic Hit",
            subcategory: "Stress Relief & Muscle Relaxation",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Anti-stress and mood support with muscle relaxation",
            primary_benefits: ["stress_reduction", "mood_support", "muscle_relaxation", "sleep_quality"],
            secondary_benefits: ["calming", "nervous_system", "emotional_balance"],
            target_goals: ["less-stress", "better-sleep", "healthy-heart"],
            target_demographics: {
                age_preference: { min: 20, max: 70, optimal: [30, 60] },
                gender_preference: "both",
                lifestyle_factors: ["high-stress", "muscle-tension", "poor-sleep"]
            },
            health_benefits: [
                "stress reduction",
                "mood improvement",
                "muscle relaxation",
                "better sleep quality",
                "emotional balance"
            ],
            key_ingredients: ["Magnesium Bisglycinate", "St. John's Wort", "Hawthorn", "Black Horehound"],
            contraindications: ["SSRI-medications", "kidney-disease"],
            scoring_factors: {
                goals_match: {
                    "less-stress": 2.8,
                    "better-sleep": 2.2,
                    "healthy-heart": 1.2
                },
                symptoms_match: {
                    "muscle-tension": 2.5,
                    "high-stress": 2.2,
                    "poor-sleep": 2.0,
                    "irritability": 1.8
                },
                lifestyle_match: {
                    "high-stress-lifestyle": 2.2,
                    "physical-tension": 2.0,
                    "poor-sleep-habits": 1.8,
                    "sedentary": 1.5
                },
                demographics_match: {
                    "age_30_60": 1.5,
                    "desk-job": 1.3,
                    "physically-active": 1.2
                },
                stress_factors: {
                    "chronic-stress": 2.5,
                    "muscle-tightness": 2.2,
                    "restlessness": 1.8
                },
                sleep_factors: {
                    "difficulty-sleeping": 2.0,
                    "waking-tired": 1.8,
                    "muscle-cramps": 1.5
                }
            }
        },
        {
            id: "D",
            name: "D | Body Detox",
            category: "Classic Hit",
            subcategory: "Detoxification & Immune Support",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Detoxification and immune system support",
            primary_benefits: ["detox", "immune_support", "anti_inflammatory", "liver_health"],
            secondary_benefits: ["cellular_cleansing", "skin_health", "energy"],
            target_goals: ["detox", "natural-immunity", "clearer-skin"],
            target_demographics: {
                age_preference: { min: 18, max: 75, optimal: [25, 60] },
                gender_preference: "both",
                lifestyle_factors: ["urban-living", "alcohol", "poor-diet", "exposure-toxins"]
            },
            health_benefits: [
                "cellular detoxification",
                "immune system strengthening",
                "anti-inflammatory effects",
                "liver support",
                "toxin elimination"
            ],
            key_ingredients: ["Cat's Claw", "Ginger Root"],
            contraindications: ["autoimmune-disease", "pregnancy"],
            scoring_factors: {
                goals_match: {
                    "detox": 2.8,
                    "natural-immunity": 2.2,
                    "clearer-skin": 1.8
                },
                symptoms_match: {
                    "toxin-exposure": 2.5,
                    "low-energy": 1.8,
                    "skin-issues": 1.5,
                    "inflammation": 1.2
                },
                lifestyle_match: {
                    "urban-polluted": 2.2,
                    "alcohol-consumption": 2.0,
                    "poor-diet": 1.8,
                    "chemical-exposure": 2.5
                },
                demographics_match: {
                    "age_25_60": 1.5,
                    "city-dweller": 1.3,
                    "industrial-area": 1.8
                },
                detox_factors: {
                    "alcohol-regular": 2.2,
                    "processed-foods": 1.8,
                    "pollution-exposure": 2.5,
                    "chemical-exposure": 2.0
                },
                immunity_factors: {
                    "frequent-infections": 1.8,
                    "slow-healing": 1.5
                }
            }
        },
        {
            id: "N",
            name: "N | Genitourinary Health",
            category: "Classic Hit",
            subcategory: "Urinary & Kidney Health",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Urinary tract and kidney health support",
            primary_benefits: ["urinary_health", "kidney_support", "detox", "circulation"],
            secondary_benefits: ["hormonal_balance", "anti_inflammatory", "immune_support"],
            target_goals: ["detox", "healthy-heart", "natural-immunity"],
            target_demographics: {
                age_preference: { min: 25, max: 70, optimal: [35, 65] },
                gender_preference: "both",
                lifestyle_factors: ["urinary-issues", "kidney-concerns", "hydration-issues"]
            },
            health_benefits: [
                "urinary tract health",
                "kidney function support",
                "detoxification",
                "circulation improvement",
                "anti-inflammatory effects"
            ],
            key_ingredients: ["Angelica Sinensis", "Cherry Stalks", "Witch Hazel", "Iron Pidolate"],
            contraindications: ["kidney-disease", "iron-overload"],
            scoring_factors: {
                goals_match: {
                    "detox": 2.2,
                    "healthy-heart": 1.5,
                    "natural-immunity": 1.8
                },
                symptoms_match: {
                    "urinary-issues": 2.8,
                    "fluid-retention": 2.0,
                    "kidney-concerns": 2.5,
                    "circulation-poor": 1.5
                },
                lifestyle_match: {
                    "poor-hydration": 2.0,
                    "urinary-history": 2.5,
                    "sedentary": 1.2,
                    "bladder-issues": 2.2
                },
                demographics_match: {
                    "age_35_65": 1.5,
                    "female": 1.8,
                    "male_prostate": 1.5
                },
                detox_factors: {
                    "fluid-retention": 2.0,
                    "kidney-stress": 2.5,
                    "toxin-build-up": 1.8
                }
            }
        },
        {
            id: "G",
            name: "G | Health and Wellness Booster",
            category: "Classic Hit",
            subcategory: "Energy & Cognitive Enhancement",
            price_eur: 34,
            capsules: 30,
            main_purpose: "Energy enhancement and cognitive performance",
            primary_benefits: ["energy", "cognitive_function", "immune_support", "adaptogen"],
            secondary_benefits: ["mental_clarity", "physical_performance", "stress_resistance"],
            target_goals: ["sustained-energy", "sharper-focus", "natural-immunity"],
            target_demographics: {
                age_preference: { min: 20, max: 75, optimal: [30, 65] },
                gender_preference: "both",
                lifestyle_factors: ["mental-work", "physical-activity", "low-energy"]
            },
            health_benefits: [
                "energy enhancement",
                "cognitive function improvement",
                "stress adaptation",
                "immune support",
                "physical performance"
            ],
            key_ingredients: ["Ginseng Root", "Ginger Root"],
            contraindications: ["high-blood-pressure", "autoimmune-disease"],
            scoring_factors: {
                goals_match: {
                    "sustained-energy": 2.8,
                    "sharper-focus": 2.5,
                    "natural-immunity": 1.8
                },
                symptoms_match: {
                    "mental-fatigue": 2.5,
                    "physical-fatigue": 2.2,
                    "poor-concentration": 2.0,
                    "low-motivation": 1.8
                },
                lifestyle_match: {
                    "mental-work": 2.2,
                    "physical-activity": 1.8,
                    "high-demand": 2.0,
                    "busy-lifestyle": 1.5
                },
                demographics_match: {
                    "age_30_65": 1.5,
                    "professional": 1.3,
                    "athlete": 1.2
                },
                energy_factors: {
                    "chronic-fatigue": 2.5,
                    "mental-exhaustion": 2.2,
                    "low-stamina": 2.0
                },
                cognitive_factors: {
                    "brain-fog": 2.5,
                    "poor-memory": 2.0,
                    "difficulty-focusing": 2.2
                }
            }
        },

        // === DIRECT HIT ===
        {
            id: "LV",
            name: "LV | Radiance of Youth",
            category: "Direct Hit",
            subcategory: "Anti-Aging & Skin Health",
            price_eur: 120,
            capsules: 60,
            main_purpose: "Antioxidant protection against aging processes",
            primary_benefits: ["anti_aging", "skin_health", "cellular_protection", "antioxidant"],
            secondary_benefits: ["collagen_support", "skin_regeneration", "detox"],
            target_goals: ["clearer-skin", "longevity", "detox"],
            target_demographics: {
                age_preference: { min: 30, max: 70, optimal: [35, 60] },
                gender_preference: "both",
                lifestyle_factors: ["aging-concerns", "sun-exposure", "pollution-exposure"]
            },
            health_benefits: [
                "neutralizes free radicals",
                "slows down aging process",
                "stimulates skin cell regeneration",
                "improves skin radiance"
            ],
            key_ingredients: ["Acai Berry Extract", "Green Tea", "Goji Berry", "Resveratrol", "CoQ10"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "clearer-skin": 2.8,
                    "longevity": 2.5,
                    "detox": 1.8
                },
                symptoms_match: {
                    "skin-aging": 2.8,
                    "dull-skin": 2.5,
                    "sun-damage": 2.2,
                    "pollution-exposure": 2.0
                },
                lifestyle_match: {
                    "aging-concerns": 2.5,
                    "sun-exposure": 2.0,
                    "urban-living": 1.8,
                    "stress-aging": 1.5
                },
                demographics_match: {
                    "age_35_60": 2.0,
                    "female": 1.8,
                    "premium-segment": 1.5
                },
                skin_factors: {
                    "premature-aging": 2.8,
                    "sun-damage": 2.5,
                    "dull-complexion": 2.2
                }
            }
        },
        {
            id: "BR",
            name: "BR | Healthy Brain, Strong Nerves",
            category: "Direct Hit",
            subcategory: "Brain & Nervous System",
            price_eur: 64,
            capsules: 30,
            main_purpose: "Brain protection and nervous system support",
            primary_benefits: ["brain_health", "cognitive_function", "nervous_system", "memory"],
            secondary_benefits: ["stress_resistance", "vision_support", "circulation"],
            target_goals: ["sharper-focus", "longevity", "less-stress"],
            target_demographics: {
                age_preference: { min: 40, max: 80, optimal: [50, 75] },
                gender_preference: "both",
                lifestyle_factors: ["mental-work", "stress", "family-history-cognitive"]
            },
            health_benefits: [
                "protects brain from stress",
                "improves mental abilities",
                "reduces cognitive deterioration",
                "supports vision health"
            ],
            key_ingredients: ["DHA", "Ginkgo Biloba", "Vitamin B5", "Vitamin B6", "Vitamin E"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "sharper-focus": 2.8,
                    "longevity": 2.2,
                    "less-stress": 1.5
                },
                symptoms_match: {
                    "memory-concerns": 2.8,
                    "poor-concentration": 2.5,
                    "brain-fog": 2.2,
                    "stress-impact": 1.8
                },
                lifestyle_match: {
                    "mental-work": 2.0,
                    "high-stress": 1.8,
                    "family-history": 2.2,
                    "aging-concerns": 2.0
                },
                demographics_match: {
                    "age_50_75": 2.2,
                    "professional": 1.5,
                    "cognitive-concerns": 2.5
                },
                cognitive_factors: {
                    "memory-loss": 2.8,
                    "concentration-issues": 2.5,
                    "mental-fatigue": 2.2
                }
            }
        },
        {
            id: "OS",
            name: "OS | Strong Bones and Joints",
            category: "Direct Hit",
            subcategory: "Bone & Joint Health",
            price_eur: 49,
            capsules: 30,
            main_purpose: "Bone strengthening and joint health support",
            primary_benefits: ["bone_health", "joint_support", "calcium_absorption", "mineral_support"],
            secondary_benefits: ["posture_support", "fracture_prevention", "muscle_function"],
            target_goals: ["longevity", "healthy-heart"],
            target_demographics: {
                age_preference: { min: 45, max: 85, optimal: [50, 75] },
                gender_preference: "both",
                lifestyle_factors: ["aging", "osteoporosis-risk", "low-sun-exposure"]
            },
            health_benefits: [
                "reduces osteoporotic fracture risk",
                "improves bone density",
                "enhances calcium absorption",
                "supports joint flexibility"
            ],
            key_ingredients: ["Marine Minerals", "Calcium", "Vitamin D3", "Vitamin K2", "Zinc"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "longevity": 2.2,
                    "healthy-heart": 1.2
                },
                symptoms_match: {
                    "bone-concerns": 2.8,
                    "joint-pain": 2.2,
                    "posture-issues": 2.0,
                    "fracture-risk": 2.5
                },
                lifestyle_match: {
                    "aging": 2.5,
                    "low-activity": 1.8,
                    "poor-nutrition": 1.5,
                    "osteoporosis-family": 2.2
                },
                demographics_match: {
                    "age_50_75": 2.0,
                    "post_menopause": 1.8,
                    "elderly": 2.2
                },
                bone_factors: {
                    "bone-density-concerns": 2.8,
                    "joint-stiffness": 2.0,
                    "fracture-history": 2.5
                }
            }
        },
        {
            id: "ENT",
            name: "ENT | Youth of Joints",
            category: "Direct Hit",
            subcategory: "Joint Restoration & Mobility",
            price_eur: 49,
            capsules: 30,
            main_purpose: "Joint pain relief and restoration",
            primary_benefits: ["joint_health", "pain_relief", "mobility", "cartilage_support"],
            secondary_benefits: ["inflammation_reduction", "flexibility", "recovery"],
            target_goals: ["longevity", "better-sleep"],
            target_demographics: {
                age_preference: { min: 35, max: 80, optimal: [45, 70] },
                gender_preference: "both",
                lifestyle_factors: ["joint-pain", "arthritis", "physical-activity"]
            },
            health_benefits: [
                "relieves joint pain",
                "restores joint function",
                "supports cartilage health",
                "improves mobility and flexibility"
            ],
            key_ingredients: ["Glucosamine Sulfate", "Marine Collagen", "Chondroitin", "MSM", "Vitamin C"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "longevity": 2.0,
                    "better-sleep": 1.5
                },
                symptoms_match: {
                    "joint-pain": 2.8,
                    "stiffness": 2.5,
                    "mobility-issues": 2.2,
                    "arthritis": 2.8
                },
                lifestyle_match: {
                    "physically-active": 2.0,
                    "aging": 2.2,
                    "repetitive-stress": 1.8,
                    "sports": 1.5
                },
                demographics_match: {
                    "age_45_70": 2.0,
                    "active_adults": 1.5,
                    "arthritis_sufferers": 2.5
                },
                joint_factors: {
                    "chronic-joint-pain": 2.8,
                    "arthritis-diagnosis": 2.8,
                    "mobility-limitation": 2.5
                }
            }
        },
        {
            id: "DR",
            name: "DR | Strong Immune System",
            category: "Direct Hit",
            subcategory: "Immune Support & Gut Health",
            price_eur: 49,
            capsules: 30,
            main_purpose: "Intestinal immunity and immune system strengthening",
            primary_benefits: ["immune_support", "gut_health", "detox", "digestion"],
            secondary_benefits: ["microbiome_balance", "toxin_elimination", "infection_resistance"],
            target_goals: ["natural-immunity", "detox", "better-digestion"],
            target_demographics: {
                age_preference: { min: 18, max: 75, optimal: [25, 65] },
                gender_preference: "both",
                lifestyle_factors: ["low-immunity", "gut-issues", "frequent-travel"]
            },
            health_benefits: [
                "supports intestinal immunity",
                "improves digestion",
                "removes toxins and waste",
                "enhances gut microbiome"
            ],
            key_ingredients: ["Lalmin Immune™", "Beta-Glucans", "Selenium", "Vitamin D2", "Echinacea"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "natural-immunity": 2.8,
                    "detox": 2.0,
                    "better-digestion": 2.2
                },
                symptoms_match: {
                    "frequent-illness": 2.5,
                    "digestive-issues": 2.0,
                    "slow-recovery": 2.2,
                    "allergies": 1.8
                },
                lifestyle_match: {
                    "high-exposure": 2.2,
                    "travel-frequently": 2.0,
                    "stress": 1.5,
                    "poor-diet": 1.8
                },
                demographics_match: {
                    "all_ages": 1.0,
                    "immune_compromised": 2.2
                },
                immunity_factors: {
                    "frequent-infections": 2.8,
                    "autoimmune-conditions": 1.5,
                    "seasonal-issues": 2.0
                }
            }
        },
        {
            id: "VS",
            name: "VS | Healthy Veins",
            category: "Direct Hit",
            subcategory: "Vascular Health & Circulation",
            price_eur: 64,
            capsules: 60,
            main_purpose: "Vascular health support and circulation improvement",
            primary_benefits: ["circulation", "vascular_health", "anti_inflammatory", "vein_support"],
            secondary_benefits: ["blood_flow", "leg_health", "swelling_reduction"],
            target_goals: ["healthy-heart", "longevity", "detox"],
            target_demographics: {
                age_preference: { min: 40, max: 80, optimal: [50, 75] },
                gender_preference: "both",
                lifestyle_factors: ["circulation-issues", "sedentary", "vein-problems"]
            },
            health_benefits: [
                "normalizes blood pressure",
                "strengthens blood vessel walls",
                "relieves leg pain and heaviness",
                "reduces swelling"
            ],
            key_ingredients: ["Grape Seed Extract", "Diosmin", "Hesperidin", "Gotu Kola", "Resveratrol"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "healthy-heart": 2.5,
                    "longevity": 2.0,
                    "detox": 1.5
                },
                symptoms_match: {
                    "circulation-poor": 2.8,
                    "leg-pain": 2.5,
                    "swelling": 2.2,
                    "varicose-veins": 2.8
                },
                lifestyle_match: {
                    "sedentary": 2.2,
                    "standing-long": 2.0,
                    "travel-frequently": 1.5
                },
                demographics_match: {
                    "age_50_75": 2.0,
                    "female": 1.8,
                    "circulation_issues": 2.5
                },
                heart_factors: {
                    "poor-circulation": 2.8,
                    "blood-pressure-issues": 2.2,
                    "family-history-vascular": 2.0
                }
            }
        },
        {
            id: "S2S",
            name: "S2S | Keen Eye",
            category: "Direct Hit",
            subcategory: "Vision & Eye Health",
            price_eur: 64,
            capsules: 30,
            main_purpose: "Comprehensive eye health and visual system support",
            primary_benefits: ["vision_support", "eye_health", "antioxidant", "cellular_protection"],
            secondary_benefits: ["blue_light_protection", "retinal_health", "visual_acuity"],
            target_goals: ["longevity", "natural-immunity"],
            target_demographics: {
                age_preference: { min: 30, max: 85, optimal: [40, 75] },
                gender_preference: "both",
                lifestyle_factors: ["screen-time", "aging-eyes", "vision-concerns"]
            },
            health_benefits: [
                "maintains visual system health",
                "improves visual perception quality",
                "protects against oxidative damage",
                "supports retinal function"
            ],
            key_ingredients: ["Lutein", "Zeaxanthin", "Blueberry Extract", "Vitamin C", "L-Glutathione"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "longevity": 2.2,
                    "natural-immunity": 1.5
                },
                symptoms_match: {
                    "vision-issues": 2.8,
                    "eye-strain": 2.5,
                    "poor-night-vision": 2.2,
                    "screen-fatigue": 2.0
                },
                lifestyle_match: {
                    "high-screen-time": 2.5,
                    "aging": 2.0,
                    "driving": 1.8,
                    "reading-difficulty": 2.2
                },
                demographics_match: {
                    "age_40_75": 2.0,
                    "computer_workers": 2.2,
                    "vision_impairment": 2.5
                },
                vision_factors: {
                    "vision-deterioration": 2.8,
                    "eye-strain": 2.5,
                    "screen-exposure": 2.2
                }
            }
        },
        {
            id: "NPM",
            name: "NPM | Nature's Power for Men",
            category: "Direct Hit",
            subcategory: "Men's Genitourinary Health",
            price_eur: 64,
            capsules: 60,
            main_purpose: "Male genitourinary system health and hormonal balance",
            primary_benefits: ["prostate_health", "male_hormones", "urinary_health", "sexual_function"],
            secondary_benefits: ["energy", "antioxidant", "immune_support", "anti_aging"],
            target_goals: ["detox", "natural-immunity", "longevity"],
            target_demographics: {
                age_preference: { min: 35, max: 75, optimal: [45, 65] },
                gender_preference: "male",
                lifestyle_factors: ["prostate-concerns", "urinary-issues", "male-health"]
            },
            health_benefits: [
                "destroys pathogenic microorganisms",
                "supports prostate health",
                "enhances male hormone synthesis",
                "provides antioxidant protection"
            ],
            key_ingredients: ["Harpagophytum", "Echinacea", "Nigella Sativa", "Curcuminoids", "Zinc"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "detox": 2.0,
                    "natural-immunity": 2.2,
                    "longevity": 1.8
                },
                symptoms_match: {
                    "prostate-issues": 2.8,
                    "urinary-problems": 2.5,
                    "low-energy": 1.8,
                    "hormonal-changes": 2.2
                },
                lifestyle_match: {
                    "aging-male": 2.5,
                    "prostate-family-history": 2.2,
                    "male-health-concerns": 2.0
                },
                demographics_match: {
                    "male": 2.5,
                    "age_45_65": 2.2,
                    "prostate_concerns": 2.8
                },
                prostate_factors: {
                    "prostate-concerns": 2.8,
                    "urinary-issues": 2.5,
                    "male-health": 2.2
                }
            }
        },
        {
            id: "MDS",
            name: "MDS | Mature Beauty",
            category: "Direct Hit",
            subcategory: "Women's Hormonal Health",
            price_eur: 64,
            capsules: 60,
            main_purpose: "Health and beauty support for mature women",
            primary_benefits: ["hormonal_balance", "bone_health", "skin_health", "menopausal_support"],
            secondary_benefits: ["mood_support", "energy", "anti_aging", "calcium_absorption"],
            target_goals: ["longevity", "clearer-skin", "healthy-heart"],
            target_demographics: {
                age_preference: { min: 40, max: 75, optimal: [45, 65] },
                gender_preference: "female",
                lifestyle_factors: ["menopause", "hormonal-changes", "bone-health"]
            },
            health_benefits: [
                "normalizes estrogen levels",
                "delays menopause symptoms",
                "slows aging processes",
                "protects bones and joints"
            ],
            key_ingredients: ["Soy Isoflavones", "Vitex Agnus-Castus", "Calcium", "Vitamin D3", "Grape Seed Extract"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "longevity": 2.2,
                    "clearer-skin": 1.8,
                    "healthy-heart": 1.5
                },
                symptoms_match: {
                    "menopausal-symptoms": 2.8,
                    "hormonal-imbalance": 2.5,
                    "bone-concerns": 2.0,
                    "skin-aging": 1.8
                },
                lifestyle_match: {
                    "perimenopause": 2.8,
                    "post-menopause": 2.5,
                    "female-aging": 2.2
                },
                demographics_match: {
                    "female": 2.5,
                    "age_45_65": 2.2,
                    "menopausal": 2.8
                },
                menopausal_factors: {
                    "menopausal-symptoms": 2.8,
                    "hormonal-imbalance": 2.5,
                    "bone-density-concerns": 2.0
                }
            }
        },
        {
            id: "GQ10",
            name: "GQ10 | Strong Heart",
            category: "Direct Hit",
            subcategory: "Cardiovascular Energy & Cellular Health",
            price_eur: 64,
            capsules: 60,
            main_purpose: "Cardiac function support and cellular energy activation",
            primary_benefits: ["heart_health", "cellular_energy", "antioxidant", "metabolism"],
            secondary_benefits: ["circulation", "vitality", "anti_aging", "mitochondrial_support"],
            target_goals: ["healthy-heart", "sustained-energy", "longevity"],
            target_demographics: {
                age_preference: { min: 40, max: 80, optimal: [50, 75] },
                gender_preference: "both",
                lifestyle_factors: ["heart-concerns", "low-energy", "aging"]
            },
            health_benefits: [
                "prolongs cell life cycle",
                "protects cell walls from damage",
                "supports cardiovascular function",
                "enhances cellular energy production"
            ],
            key_ingredients: ["Coenzyme Q10", "Vitamin C", "Pomegranate", "Cypress Oil", "Grape Extract"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "healthy-heart": 2.8,
                    "sustained-energy": 2.2,
                    "longevity": 2.0
                },
                symptoms_match: {
                    "heart-concerns": 2.8,
                    "low-energy": 2.0,
                    "circulation-poor": 1.8,
                    "aging-concerns": 2.2
                },
                lifestyle_match: {
                    "heart-family-history": 2.5,
                    "aging": 2.0,
                    "stress": 1.5
                },
                demographics_match: {
                    "age_50_75": 2.2,
                    "heart_health_concerns": 2.5
                },
                heart_factors: {
                    "cardiovascular-concerns": 2.8,
                    "energy-production-issues": 2.0,
                    "mitochondrial-health": 2.2
                }
            }
        },

        // === JUNIOR HIT ===
        {
            id: "JN",
            name: "JN | Child Growth",
            category: "Junior Hit",
            subcategory: "Children's Development & Growth",
            price_eur: 34,
            capsules: 60,
            main_purpose: "Harmonious development of child's body",
            primary_benefits: ["growth_support", "immune_support", "brain_development", "nutrient_support"],
            secondary_benefits: ["metabolism", "inflammation_reduction", "cognitive_development"],
            target_goals: ["natural-immunity", "sharper-focus"],
            target_demographics: {
                age_preference: { min: 3, max: 18, optimal: [5, 15] },
                gender_preference: "both",
                lifestyle_factors: ["growing-children", "school-performance", "immune-support"]
            },
            health_benefits: [
                "supports metabolic processes",
                "improves brain function",
                "strengthens immunity",
                "reduces inflammation"
            ],
            key_ingredients: ["Bitter Orange Extract", "Vitamin C", "Vitamin D3", "Zinc", "B Vitamins"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "natural-immunity": 2.2,
                    "sharper-focus": 1.8
                },
                symptoms_match: {
                    "growth-concerns": 2.5,
                    "frequent-illness": 2.0,
                    "learning-difficulties": 1.8,
                    "poor-nutrition": 2.2
                },
                lifestyle_match: {
                    "growing-child": 2.8,
                    "school-age": 2.0,
                    "sports-activity": 1.5
                },
                demographics_match: {
                    "children": 2.5,
                    "teens": 2.0,
                    "students": 1.8
                },
                growth_factors: {
                    "development-needs": 2.8,
                    "growth-concerns": 2.5,
                    "learning-support": 2.0
                }
            }
        },
        {
            id: "JNB",
            name: "JNB | Royal Posture",
            category: "Junior Hit",
            subcategory: "Children's Bone & Posture",
            price_eur: 39,
            capsules: 60,
            main_purpose: "Harmonious growth and ideal posture for children",
            primary_benefits: ["bone_health", "posture_support", "growth_support", "calcium_absorption"],
            secondary_benefits: ["skeletal_development", "dental_health", "mineral_balance"],
            target_goals: ["longevity", "healthy-heart"],
            target_demographics: {
                age_preference: { min: 3, max: 18, optimal: [6, 16] },
                gender_preference: "both",
                lifestyle_factors: ["growing-children", "posture-concerns", "bone-development"]
            },
            health_benefits: [
                "promotes calcium absorption",
                "supports proper skeletal formation",
                "strengthens bones and teeth",
                "normalizes metabolism"
            ],
            key_ingredients: ["Calcium", "Silicon", "Vitamin K2", "Vitamin D", "Vitamin B1"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "longevity": 1.5,
                    "healthy-heart": 1.0
                },
                symptoms_match: {
                    "posture-issues": 2.8,
                    "growth-concerns": 2.5,
                    "bone-development": 2.2,
                    "dental-issues": 1.8
                },
                lifestyle_match: {
                    "growing-child": 2.8,
                    "posture-problems": 2.5,
                    "active-children": 1.5
                },
                demographics_match: {
                    "children": 2.5,
                    "teens": 2.0
                },
                development_factors: {
                    "posture-concerns": 2.8,
                    "bone-development": 2.5,
                    "growth-needs": 2.2
                }
            }
        },
        {
            id: "PROGUM",
            name: "PROGUM | Keep Calcium",
            category: "Junior Hit",
            subcategory: "Dental Health & Calcium Support",
            price_eur: 39,
            capsules: 60,
            main_purpose: "Tooth enamel strengthening and cavity prevention",
            primary_benefits: ["dental_health", "calcium_support", "immune_support", "oral_care"],
            secondary_benefits: ["enamel_protection", "cavity_prevention", "probiotic_support"],
            target_goals: ["natural-immunity", "better-digestion"],
            target_demographics: {
                age_preference: { min: 3, max: 18, optimal: [4, 12] },
                gender_preference: "both",
                lifestyle_factors: ["dental-care", "cavity-prevention", "oral-health"]
            },
            health_benefits: [
                "strengthens tooth enamel",
                "prevents cavities",
                "improves oral microflora",
                "fights harmful bacteria"
            ],
            key_ingredients: ["Vitamin D3", "Lactobacillus Salivarius", "Fluoride"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "natural-immunity": 1.8,
                    "better-digestion": 1.2
                },
                symptoms_match: {
                    "dental-issues": 2.8,
                    "cavity-prone": 2.5,
                    "oral-health": 2.2,
                    "calcium-deficiency": 2.0
                },
                lifestyle_match: {
                    "dental-care": 2.5,
                    "sugar-consumption": 2.0,
                    "children-health": 2.2
                },
                demographics_match: {
                    "children": 2.5,
                    "young_teens": 2.0
                },
                dental_factors: {
                    "dental-health": 2.8,
                    "cavity-prevention": 2.5,
                    "oral-microbiome": 2.0
                }
            }
        },

        // === BEAUTY HIT ===
        /*{
            id: "GH",
            name: "GH | Pure Energy",
            category: "Beauty Hit",
            subcategory: "Beauty Elixir & Energy",
            price_eur: 129,
            capsules: 30,
            main_purpose: "Natural health elixir for skin and overall vitality",
            primary_benefits: ["energy", "skin_health", "immune_support", "vitality"],
            secondary_benefits: ["radiance", "anti_aging", "cellular_energy", "detox"],
            target_goals: ["clearer-skin", "sustained-energy", "natural-immunity"],
            target_demographics: {
                age_preference: { min: 25, max: 65, optimal: [30, 55] },
                gender_preference: "both",
                lifestyle_factors: ["skin-concerns", "low-energy", "premium-wellness"]
            },
            health_benefits: [
                "increases protective properties",
                "improves skin condition",
                "benefits all organs and systems",
                "enhances overall vitality"
            ],
            key_ingredients: ["White Imperial Ginseng", "Honey", "Royal Jelly", "Orange Juice"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "clearer-skin": 2.5,
                    "sustained-energy": 2.2,
                    "natural-immunity": 1.8
                },
                symptoms_match: {
                    "dull-skin": 2.5,
                    "low-energy": 2.0,
                    "premature-aging": 2.2,
                    "vitality-concerns": 1.8
                },
                lifestyle_match: {
                    "premium-wellness": 2.0,
                    "skin-focus": 2.2,
                    "energy-needs": 1.8
                },
                demographics_match: {
                    "age_30_55": 1.8,
                    "beauty_conscious": 2.2
                },
                beauty_factors: {
                    "skin-radiance": 2.5,
                    "premium-care": 2.0,
                    "holistic-beauty": 2.2
                }
            }
        },
        {
            id: "GS",
            name: "GS | Shine of Inner Beauty",
            category: "Beauty Hit",
            subcategory: "Inner Beauty & Radiance",
            price_eur: 115,
            capsules: 30,
            main_purpose: "Drinking complex for skin radiance and age spot reduction",
            primary_benefits: ["skin_radiance", "anti_aging", "collagen_support", "pigmentation_care"],
            secondary_benefits: ["brightening", "redness_reduction", "wrinkle_prevention", "antioxidant"],
            target_goals: ["clearer-skin", "longevity", "detox"],
            target_demographics: {
                age_preference: { min: 30, max: 70, optimal: [35, 60] },
                gender_preference: "both",
                lifestyle_factors: ["aging-skin", "pigmentation", "skin-radiance"]
            },
            health_benefits: [
                "brightens age spots",
                "reduces redness and dark circles",
                "stimulates collagen production",
                "prevents wrinkle appearance"
            ],
            key_ingredients: ["Grape Seed Extract", "Melon Juice", "Hyaluronic Acid", "Zinc", "Rose Hydrolate"],
            contraindications: [],
            scoring_factors: {
                goals_match: {
                    "clearer-skin": 2.8,
                    "longevity": 2.0,
                    "detox": 1.5
                },
                symptoms_match: {
                    "age-spots": 2.8,
                    "dull-complexion": 2.5,
                    "wrinkles": 2.2,
                    "skin-aging": 2.5
                },
                lifestyle_match: {
                    "skin-care-focus": 2.5,
                    "aging-concerns": 2.2,
                    "premium-beauty": 2.0
                },
                demographics_match: {
                    "age_35_60": 2.0,
                    "beauty_conscious": 2.5
                },
                beauty_factors: {
                    "premium-skin-care": 2.8,
                    "aging-skin": 2.5,
                    "complexion-concerns": 2.2
                }
            }
        }*/
    ]
};