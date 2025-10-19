// src/components/quiz-pages/quiz-results/recommendationEngine.ts
import { productsData, Product } from '../../../config/projectVProducts';

export interface ProductRecommendation {
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
}

export interface RecommendationResult {
    recommended_products: ProductRecommendation[];
    effectiveness_score: number;
    key_benefits: string[];
    wellness_profile: string;
    profile_description: string;
    recommended_kits: string[];
    lifestyle_insights: string[];
    usage_guidance: string;
}

interface ComprehensiveSymptomAnalysis {
    // Core systems
    stress_level: number;
    energy_level: number;
    sleep_quality: number;
    digestion_quality: number;
    skin_condition: number;
    immunity_level: number;
    cognitive_function: number;
    detox_needs: number;
    
    // Specific systems
    cardiovascular_health: number;
    joint_bone_health: number;
    hormonal_balance: number;
    vision_health: number;
    urinary_health: number;
    respiratory_health: number;
    
    // Age factors
    aging_concerns: number;
    developmental_needs: number;
    mature_health: number;
    
    // Lifestyle
    environmental_toxins: number;
    physical_activity: number;
    mental_strain: number;
    nutritional_status: number;
}

interface ScoredProduct {
    product: Product;
    score: number;
    reasoning: string[];
    priority: 'high' | 'medium' | 'low';
    effectiveness: number;
    category: string;
    subcategory: string;
}

interface ProductCategories {
    'Classic Hit': ScoredProduct[];
    'Direct Hit': ScoredProduct[];
    'Junior Hit': ScoredProduct[];
    'Beauty Hit': ScoredProduct[];
}

export class ProjectVRecommendationEngine {
    private products: Product[] = productsData.products;

    public getRecommendations(answers: Record<string, any>): RecommendationResult {
        if (!answers || Object.keys(answers).length === 0) {
            throw new Error('No answers provided');
        }

        // Comprehensive analysis of all body systems
        const symptomAnalysis = this.comprehensiveSymptomAnalysis(answers);
        
        // Calculate scores for all products considering categories
        const productScores = this.calculateAllProductScores(answers, symptomAnalysis);

        // Product selection strategy
        const selectedProducts = this.selectOptimalProductCombination(productScores, answers);

        // Compile final recommendations
        return this.compileFinalRecommendations(selectedProducts, answers, symptomAnalysis);
    }

    private comprehensiveSymptomAnalysis(answers: any): ComprehensiveSymptomAnalysis {
        const age: number = answers.age || 30;
        const gender: string = answers.gender || 'both';
        
        return {
            // Core systems
            stress_level: this.calculateAdvancedStressLevel(answers),
            energy_level: this.calculateAdvancedEnergyLevel(answers),
            sleep_quality: this.calculateAdvancedSleepQuality(answers),
            digestion_quality: this.calculateAdvancedDigestionQuality(answers),
            skin_condition: this.calculateAdvancedSkinCondition(answers),
            immunity_level: this.calculateAdvancedImmunityLevel(answers),
            cognitive_function: this.calculateAdvancedCognitiveFunction(answers),
            detox_needs: this.calculateAdvancedDetoxNeeds(answers),
            
            // Specific systems
            cardiovascular_health: this.calculateCardiovascularHealth(answers, age),
            joint_bone_health: this.calculateJointBoneHealth(answers, age),
            hormonal_balance: this.calculateHormonalBalance(answers, age, gender),
            vision_health: this.calculateVisionHealth(answers, age),
            urinary_health: this.calculateUrinaryHealth(answers, age, gender),
            respiratory_health: this.calculateRespiratoryHealth(answers),
            
            // Age factors
            aging_concerns: this.calculateAgingConcerns(age, answers),
            developmental_needs: this.calculateDevelopmentalNeeds(age, answers),
            mature_health: this.calculateMatureHealth(age, gender, answers),
            
            // Lifestyle
            environmental_toxins: this.calculateEnvironmentalToxins(answers),
            physical_activity: this.calculatePhysicalActivity(answers),
            mental_strain: this.calculateMentalStrain(answers),
            nutritional_status: this.calculateNutritionalStatus(answers)
        };
    }

    private calculateAllProductScores(answers: any, symptoms: ComprehensiveSymptomAnalysis): ScoredProduct[] {
        return this.products.map(product => {
            const baseScore = this.calculateAdvancedProductScore(product, answers, symptoms);
            const adjustedScore = this.applyCategorySpecificAdjustments(product, baseScore, answers, symptoms);
            const finalScore = this.applySynergyBonuses(product, adjustedScore, answers);
            
            return {
                product,
                score: Math.min(finalScore, 100),
                reasoning: this.generateComprehensiveReasoning(product, answers, symptoms),
                priority: this.determineAdvancedPriority(product, symptoms, answers),
                effectiveness: this.estimateProductEffectiveness(product, answers, symptoms),
                category: product.category,
                subcategory: product.subcategory
            };
        });
    }

    private calculateAdvancedProductScore(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let score = 0;
        const factors = product.scoring_factors;

        // 1. Goals alignment (25%)
        score += this.calculateGoalsAlignment(product, answers) * 0.25;

        // 2. Symptom alignment (35%)
        score += this.calculateSymptomAlignment(product, symptoms) * 0.35;

        // 3. Demographic alignment (15%)
        score += this.calculateDemographicAlignment(product, answers) * 0.15;

        // 4. Lifestyle alignment (15%)
        score += this.calculateLifestyleAlignment(product, answers) * 0.15;

        // 5. Specific factors (10%)
        score += this.calculateSpecificFactors(product, answers, symptoms) * 0.10;

        return score;
    }

    private calculateGoalsAlignment(product: Product, answers: any): number {
        const goals: string[] = Array.isArray(answers.goals) ? answers.goals : [];
        let alignment = 0;

        goals.forEach((goal: string) => {
            if (product.target_goals.includes(goal)) {
                const factor = product.scoring_factors.goals_match[goal] || 1.0;
                alignment += 30 * factor;
            }
        });

        // Bonus for multiple goal matches
        const matchingGoals = goals.filter((goal: string) => 
            product.target_goals.includes(goal)
        ).length;
        
        if (matchingGoals >= 2) {
            alignment += 15;
        }
        if (matchingGoals >= 3) {
            alignment += 10;
        }

        return Math.min(alignment, 100);
    }

    private calculateSymptomAlignment(product: Product, symptoms: ComprehensiveSymptomAnalysis): number {
        let alignment = 0;
        const primaryBenefits = product.primary_benefits;

        // Define benefit mapping with proper typing
        const benefitMapping: Record<string, () => number> = {
            // Core systems
            'stress_reduction': () => symptoms.stress_level > 70 ? 30 : 0,
            'energy': () => symptoms.energy_level < 40 ? 25 : 0,
            'sleep_quality': () => symptoms.sleep_quality < 50 ? 25 : 0,
            'digestion': () => symptoms.digestion_quality < 60 ? 20 : 0,
            'skin_health': () => symptoms.skin_condition < 60 ? 20 : 0,
            'immune_support': () => symptoms.immunity_level < 50 ? 20 : 0,
            'cognitive_function': () => symptoms.cognitive_function < 60 ? 25 : 0,
            'detox': () => symptoms.detox_needs > 60 ? 20 : 0,
            
            // Specific systems
            'heart_health': () => symptoms.cardiovascular_health < 60 ? 25 : 0,
            'joint_support': () => symptoms.joint_bone_health < 60 ? 25 : 0,
            'bone_health': () => symptoms.joint_bone_health < 60 ? 20 : 0,
            'hormonal_balance': () => symptoms.hormonal_balance < 60 ? 25 : 0,
            'vision_support': () => symptoms.vision_health < 70 ? 20 : 0,
            'urinary_health': () => symptoms.urinary_health < 70 ? 20 : 0,
            'prostate_health': () => symptoms.urinary_health < 60 ? 25 : 0,
            'menopausal_support': () => symptoms.hormonal_balance < 50 ? 25 : 0,
            
            // Anti-aging
            'anti_aging': () => symptoms.aging_concerns > 60 ? 25 : 0,
            'cellular_protection': () => symptoms.aging_concerns > 50 ? 20 : 0,
            
            // Development and growth
            'growth_support': () => symptoms.developmental_needs > 50 ? 25 : 0,
            'brain_development': () => symptoms.developmental_needs > 50 ? 20 : 0,
            
            // Beauty and vitality
            'skin_radiance': () => symptoms.skin_condition < 50 ? 25 : 0,
            'vitality': () => symptoms.energy_level < 40 ? 20 : 0
        };

        let activeBenefits = 0;

        // Apply mapping for each product benefit
        primaryBenefits.forEach(benefit => {
            const benefitFunction = benefitMapping[benefit];
            if (benefitFunction) {
                const value = benefitFunction();
                alignment += value;
                if (value > 0) {
                    activeBenefits++;
                }
            }
        });

        // Bonus for comprehensive solutions addressing multiple symptoms
        if (activeBenefits >= 3) {
            alignment += 15;
        }

        return Math.min(alignment, 100);
    }

    private calculateDemographicAlignment(product: Product, answers: any): number {
        const age: number = answers.age || 30;
        const gender: string = answers.gender || 'both';
        let alignment = 50; // Base alignment

        const demographics = product.target_demographics;

        // Age check
        if (age >= demographics.age_preference.min && age <= demographics.age_preference.max) {
            alignment += 20;
            // Optimal age range
            if (age >= demographics.age_preference.optimal[0] && age <= demographics.age_preference.optimal[1]) {
                alignment += 15;
            }
        } else {
            alignment -= 25;
        }

        // Gender check
        if (demographics.gender_preference === 'both' || demographics.gender_preference === gender) {
            alignment += 15;
        } else {
            alignment -= 20;
        }

        // Specific demographic factors
        if (demographics.lifestyle_factors) {
            const lifestyleMatch = demographics.lifestyle_factors.some(factor => 
                this.checkLifestyleFactor(factor, answers)
            );
            if (lifestyleMatch) {
                alignment += 10;
            }
        }

        return Math.max(0, Math.min(alignment, 100));
    }

    private calculateLifestyleAlignment(product: Product, answers: any): number {
        let alignment = 50;
        const lifestyleFactors = product.target_demographics.lifestyle_factors || [];

        // Define lifestyle mapping with proper typing
        const lifestyleMapping: Record<string, boolean> = {
            'urban-polluted': answers.climate === 'variable',
            'high-stress': answers.stressLevel === 'always-on',
            'poor-diet': answers.dietType === 'mostly-beige',
            'sedentary': answers.lifestyle === 'sedentary' || answers.movementFrequency === 'choreography',
            'mental-work': answers.focusLevel === 'where-am',
            'physical-activity': answers.lifestyle === 'active' || answers.lifestyle === 'highly-active' || answers.movementFrequency === 'daily',
            'low-immunity': answers.activity === 'several-times',
            'gut-issues': answers.digestion === 'constant-bloat',
            'aging-concerns': (answers.age || 30) > 45,
            'screen-time': true, // Assume modern lifestyle
            'travel-frequently': false, // No data in survey
            'busy-lifestyle': answers.energyLevel === 'low-energy' || answers.stressLevel === 'always-on',
            'high-stress-lifestyle': answers.stressLevel === 'always-on',
            'weight-concerns': answers.dietType === 'mostly-beige' || answers.lifestyle === 'sedentary',
            'skin-concerns': answers['skin-saying'] === 'dull',
            'sleep-issues': answers.sleepQuality === 'insomnia',
            'immune-support': answers.activity === 'several-times',
            'digestive-issues': answers.digestion === 'constant-bloat',
            'joint-pain': answers.jointsMuscles === 'stiff-sore',
            'hormonal-changes': (answers.age || 30) > 40,
            'vision-concerns': true, // Assume screen usage
            'urinary-issues': false, // No direct data
            'prostate-concerns': (answers.gender === 'male' && (answers.age || 30) > 45),
            'menopausal': (answers.gender === 'female' && (answers.age || 30) > 45),
            'growing-children': (answers.age || 30) >= 3 && (answers.age || 30) <= 18,
            'bone-development': (answers.age || 30) >= 3 && (answers.age || 30) <= 18,
            'dental-care': true, // General assumption
            'premium-wellness': answers['self-care'] === 'weekly-luxe-rituals',
            'skin-focus': answers['skin-saying'] === 'dull' || answers.goals?.includes('clearer-skin'),
            'energy-needs': answers.energyLevel === 'low-energy',
            // New lifestyle-specific factors
            'desk-worker': answers.lifestyle === 'sedentary',
            'balanced-lifestyle': answers.lifestyle === 'balanced',
            'active-lifestyle': answers.lifestyle === 'active',
            'athletic-lifestyle': answers.lifestyle === 'highly-active',
            // New climate-specific factors
            'cold-climate': answers.climate === 'cold',
            'warm-climate': answers.climate === 'warm-sunny',
            'humid-climate': answers.climate === 'hot-humid',
            'variable-climate': answers.climate === 'variable',
            // New location-specific factors
            'urban-living': answers.location === 'urban',
            'suburban-living': answers.location === 'suburban',
            'rural-living': answers.location === 'rural',
            'coastal-mountainous': answers.location === 'coastal-mountainous',
            // New relationship-specific factors
            'single-lifestyle': answers.relationship === 'single',
            'in-relationship': answers.relationship === 'in-relationship',
            'married-partnered': answers.relationship === 'married-partnered',
            'prefer-not-to-say': answers.relationship === 'prefer-not-to-say',
            // New hormonal status factors
            'monthly-periods': answers['hormonal-status'] === 'monthly-periods',
            'perimenopause-menopause': answers['hormonal-status'] === 'perimenopause-menopause',
            'pregnant': answers['hormonal-status'] === 'pregnant',
            'postpartum': answers['hormonal-status'] === 'postpartum',
            'hormonal-other': answers['hormonal-status'] === 'other',
            // New health conditions factors
            'no-health-conditions': answers['health-conditions']?.includes('no'),
            'high-blood-pressure': answers['health-conditions']?.includes('high-blood-pressure'),
            'diabetes': answers['health-conditions']?.includes('diabetes'),
            'autoimmune': answers['health-conditions']?.includes('autoimmune'),
            'digestive-disorder': answers['health-conditions']?.includes('digestive-disorder'),
            'heart-cardiovascular': answers['health-conditions']?.includes('heart-cardiovascular'),
            'health-conditions-other': answers['health-conditions']?.includes('other'),
            // New Long Covid factors
            'no-long-covid': answers['long-covid'] === 'no',
            'long-covid-current': answers['long-covid'] === 'currently-experiencing',
            'long-covid-improved': answers['long-covid'] === 'symptoms-improved'
        };

        lifestyleFactors.forEach(factor => {
            if (lifestyleMapping[factor]) {
                alignment += 8;
            }
        });

        return Math.min(alignment, 100);
    }

    private calculateSpecificFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let factors = 0;

        // Lifestyle-specific factors for all categories
        factors += this.calculateLifestyleSpecificFactors(product, answers, symptoms);

        // Category-specific factors
        switch (product.category) {
            case 'Junior Hit':
                factors += this.calculateJuniorHitFactors(product, answers, symptoms);
                break;
            case 'Beauty Hit':
                factors += this.calculateBeautyHitFactors(product, answers, symptoms);
                break;
            case 'Direct Hit':
                factors += this.calculateDirectHitFactors(product, answers, symptoms);
                break;
            case 'Classic Hit':
                factors += this.calculateClassicHitFactors(product, answers, symptoms);
                break;
        }

        return Math.min(factors, 100);
    }

    private calculateJuniorHitFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        const age = answers.age || 30;
        let factors = 0;

        // Only for children
        if (age >= 3 && age <= 18) {
            factors += 40; // Base bonus for appropriate age
            
            // Additional development factors
            if (symptoms.developmental_needs > 60) {
                factors += 30;
            }
            
            // Growth and learning factors
            if (product.primary_benefits.includes('growth_support') && age <= 16) {
                factors += 20;
            }
            
            if (product.primary_benefits.includes('brain_development') && age <= 18) {
                factors += 15;
            }
        } else {
            factors = 0; // Don't recommend to adults
        }

        return factors;
    }

    private calculateBeautyHitFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let factors = 0;
        const age = answers.age || 30;

        // Premium factor for Beauty Hit
        if (age >= 25) {
            factors += 30;
        }

        // Skin and anti-aging factors
        if (symptoms.skin_condition < 70) {
            factors += 25;
        }
        
        if (symptoms.aging_concerns > 50) {
            factors += 25;
        }

        // Premium care interest factor
        if (answers['self-care'] === 'weekly-luxe-rituals') {
            factors += 20;
        }

        return factors;
    }

    private calculateDirectHitFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let factors = 0;

        // Specific factors for different types of Direct Hit products
        if (product.subcategory.includes('Joint') && symptoms.joint_bone_health < 60) {
            factors += 35;
        }
        
        if (product.subcategory.includes('Vision') && symptoms.vision_health < 70) {
            factors += 35;
        }
        
        if (product.subcategory.includes('Men') && answers.gender === 'male' && symptoms.urinary_health < 70) {
            factors += 40;
        }
        
        if (product.subcategory.includes('Women') && answers.gender === 'female' && symptoms.hormonal_balance < 60) {
            factors += 40;
        }

        // Age factor for specialized products
        const age = answers.age || 30;
        if (age > 40) {
            factors += 15;
        }

        return factors;
    }

    private calculateClassicHitFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let factors = 0;

        // Classic Hit universality
        factors += 20;

        // Broad spectrum action factors
        const broadSpectrumBenefits = ['immune_support', 'energy', 'detox', 'stress_reduction'];
        const hasBroadSpectrum = product.primary_benefits.some(benefit => 
            broadSpectrumBenefits.includes(benefit)
        );
        
        if (hasBroadSpectrum) {
            factors += 15;
        }

        // First-line recommendation factor
        factors += 10;

        return factors;
    }

    private applyCategorySpecificAdjustments(product: Product, score: number, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let adjustedScore = score;

        // Category-specific adjustments
        switch (product.category) {
            case 'Junior Hit':
                adjustedScore = this.adjustJuniorHitScore(product, score, answers);
                break;
            case 'Beauty Hit':
                adjustedScore = this.adjustBeautyHitScore(product, score, answers, symptoms);
                break;
            case 'Direct Hit':
                adjustedScore = this.adjustDirectHitScore(product, score, answers, symptoms);
                break;
        }

        // Guaranteed minimum for high-priority products
        if (this.isHighPriorityProduct(product, symptoms) && adjustedScore < 40) {
            adjustedScore = 40;
        }

        return Math.min(adjustedScore, 100);
    }

    private adjustJuniorHitScore(product: Product, score: number, answers: any): number {
        const age = answers.age || 30;
        
        // Complete exclusion for inappropriate age
        if (age < 3 || age > 18) {
            return 0;
        }

        // Bonus for parents answering for children
        if (answers.isParent === true) {
            return score * 1.2;
        }

        return score;
    }

    private adjustBeautyHitScore(product: Product, score: number, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let adjusted = score;

        // Enhancement for significant skin care needs
        if (symptoms.skin_condition < 50) {
            adjusted *= 1.3;
        }

        // Enhancement for age groups
        const age = answers.age || 30;
        if (age > 35) {
            adjusted *= 1.2;
        }

        // Adjustment based on self-care attitude
        if (answers['self-care'] === 'not-really') {
            adjusted *= 0.7; // Less likely to invest in premium care
        }

        return adjusted;
    }

    private adjustDirectHitScore(product: Product, score: number, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let adjusted = score;

        // Enhancement for specific serious issues
        if (this.hasSeriousSpecificIssue(product, symptoms)) {
            adjusted *= 1.4;
        }

        // Adjustment based on readiness for specialized care
        if (answers['self-care'] === 'weekly-luxe-rituals') {
            adjusted *= 1.2;
        }

        return adjusted;
    }

    private applySynergyBonuses(product: Product, score: number, answers: any): number {
        let bonus = 0;

        // Bonus for comprehensive solutions
        if (this.isComprehensiveSolution(product)) {
            bonus += 12;
        }

        // Bonus for proven formulas (Classic Hit)
        if (product.category === 'Classic Hit') {
            bonus += 8;
        }

        // Bonus for innovative formulas (Beauty Hit, new Direct Hit)
        if (product.category === 'Beauty Hit' || product.id === 'G') {
            bonus += 5;
        }

        return score + bonus;
    }

    private selectOptimalProductCombination(scoredProducts: ScoredProduct[], answers: any): ScoredProduct[] {
        // Filter by minimum threshold
        const viableProducts = scoredProducts.filter(item => item.score >= 25);
        
        // Group by categories
        const categorizedProducts = this.categorizeProducts(viableProducts);
        
        // Selection strategy from each category
        const selectedProducts: ScoredProduct[] = [];
        
        // 1. Mandatory high-priority products
        selectedProducts.push(...this.selectHighPriorityProducts(categorizedProducts));
        
        // 2. Balanced selection by categories
        selectedProducts.push(...this.selectBalancedByCategory(categorizedProducts, answers));
        
        // 3. Supplement with synergistic products
        selectedProducts.push(...this.selectSynergisticProducts(selectedProducts, categorizedProducts));
        
        // Sorting and quantity limitation
        return this.finalizeSelection(selectedProducts, answers);
    }

    private categorizeProducts(products: ScoredProduct[]): ProductCategories {
        const categories: ProductCategories = {
            'Classic Hit': [],
            'Direct Hit': [],
            'Junior Hit': [],
            'Beauty Hit': []
        };
        
        products.forEach(product => {
            const category = product.category as keyof ProductCategories;
            if (categories[category]) {
                categories[category].push(product);
            }
        });
        
        // Sort within categories
        Object.keys(categories).forEach(categoryKey => {
            const category = categoryKey as keyof ProductCategories;
            categories[category].sort((a, b) => b.score - a.score);
        });
        
        return categories;
    }

    private selectHighPriorityProducts(categorizedProducts: ProductCategories): ScoredProduct[] {
        const highPriority: ScoredProduct[] = [];
        
        // Selection of high priority products from all categories
        Object.keys(categorizedProducts).forEach(categoryKey => {
            const category = categoryKey as keyof ProductCategories;
            const highPriorityInCategory = categorizedProducts[category]
                .filter(item => item.priority === 'high')
                .slice(0, 1); // Maximum 1 high priority product from each category
            
            highPriority.push(...highPriorityInCategory);
        });
        
        return highPriority;
    }

    private selectBalancedByCategory(categorizedProducts: ProductCategories, answers: any): ScoredProduct[] {
        const selected: ScoredProduct[] = [];
        const age = answers.age || 30;
        
        // Base quotas by categories
        const quotas = {
            'Classic Hit': 2,
            'Direct Hit': age > 40 ? 2 : 1,
            'Beauty Hit': age > 25 ? 1 : 0,
            'Junior Hit': age >= 3 && age <= 18 ? 2 : 0
        };
        
        // Selection by quotas
        Object.keys(quotas).forEach(categoryKey => {
            const category = categoryKey as keyof ProductCategories;
            const quota = quotas[category];
            const available = categorizedProducts[category] || [];
            selected.push(...available.slice(0, quota));
        });
        
        return selected;
    }

    private selectSynergisticProducts(selectedProducts: ScoredProduct[], categorizedProducts: ProductCategories): ScoredProduct[] {
        const synergistic: ScoredProduct[] = [];
        const selectedBenefits = new Set<string>();
        
        // Collect all benefits of selected products
        selectedProducts.forEach(product => {
            product.product.primary_benefits.forEach(benefit => {
                selectedBenefits.add(benefit);
            });
        });
        
        // Find products with complementary benefits
        Object.keys(categorizedProducts).forEach(categoryKey => {
            const category = categoryKey as keyof ProductCategories;
            categorizedProducts[category].forEach(product => {
                if (!selectedProducts.includes(product)) {
                    const newBenefits = product.product.primary_benefits.filter(
                        benefit => !selectedBenefits.has(benefit)
                    );
                    
                    if (newBenefits.length >= 2) {
                        synergistic.push(product);
                        // Add new benefits
                        newBenefits.forEach(benefit => selectedBenefits.add(benefit));
                    }
                }
            });
        });
        
        return synergistic.slice(0, 1); // Maximum 1 synergistic product
    }

    private finalizeSelection(selectedProducts: ScoredProduct[], answers: any): ScoredProduct[] {
        // Remove duplicates
        const uniqueProducts = selectedProducts.filter((product, index, self) =>
            index === self.findIndex(p => p.product.id === product.product.id)
        );
        
        // Sort by priority and scores
        const sortedProducts = uniqueProducts.sort((a, b) => {
            const priorityOrder = { 'high': 3, 'medium': 2, 'low': 1 };
            if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            }
            return b.score - a.score;
        });
        
        // Limit total quantity (4-6 products)
        const maxProducts = this.determineOptimalProductCount(answers);
        return sortedProducts.slice(0, maxProducts);
    }

    private determineOptimalProductCount(answers: any): number {
        const age = answers.age || 30;
        const baseCount = 4;
        
        // Increase quantity for complex cases
        if (age > 50) return 5;
        if (this.hasMultipleSeriousIssues(answers)) return 6;
        if (age >= 3 && age <= 18) return 3; // Less for children
        
        return baseCount;
    }

    // Symptom calculation methods
    private calculateAdvancedStressLevel(answers: any): number {
        const stressMap: Record<string, number> = {
            'always-on': 85,
            'sometimes': 60, 
            'breathe-space': 30
        };
        
        let stress = stressMap[answers.stressLevel] || 50;
        
        // Additional stress factors
        if (answers.stressManagement === 'chocolate-chaos') stress += 15;
        if (answers.caffeineIntake === 'more-4-cups') stress += 10;
        if (answers.sleepQuality === 'insomnia') stress += 20;
        
        // Relationship factors
        if (answers.relationship === 'single') stress += 8; // Single life can be more stressful
        if (answers.relationship === 'in-relationship') stress -= 5; // Relationship support reduces stress
        if (answers.relationship === 'married-partnered') stress -= 8; // Marriage/partnership provides stability
        if (answers.relationship === 'prefer-not-to-say') stress += 3; // Uncertainty about relationship status
        
        // Hormonal status factors
        if (answers['hormonal-status'] === 'monthly-periods') stress += 5; // Monthly hormonal stress
        if (answers['hormonal-status'] === 'perimenopause-menopause') stress += 15; // Menopause stress
        if (answers['hormonal-status'] === 'pregnant') stress += 10; // Pregnancy stress
        if (answers['hormonal-status'] === 'postpartum') stress += 12; // Postpartum stress
        if (answers['hormonal-status'] === 'other') stress += 8; // Other hormonal stress
        
        return Math.min(stress, 100);
    }

    private calculateAdvancedEnergyLevel(answers: any): number {
        const energyMap: Record<string, number> = {
            'low-energy': 25,
            'some-days-fab': 50,
            'energized-unstoppable': 80
        };
        
        let energy = energyMap[answers.energyLevel] || 50;
        
        // Factors affecting energy
        if (answers.morningEnergy === 'dragged') energy -= 15;
        if (answers.caffeineIntake === 'more-4-cups') energy -= 10; // caffeine dependency
        if (answers.dietType === 'fresh-vibrant') energy += 10;
        
        // Relationship factors
        if (answers.relationship === 'single') energy -= 5; // Single life can be more draining
        if (answers.relationship === 'in-relationship') energy += 5; // Relationship support boosts energy
        if (answers.relationship === 'married-partnered') energy += 8; // Marriage/partnership provides stability and energy
        if (answers.relationship === 'prefer-not-to-say') energy -= 2; // Uncertainty can be draining
        
        // Hormonal status factors
        if (answers['hormonal-status'] === 'monthly-periods') energy -= 3; // Monthly energy fluctuations
        if (answers['hormonal-status'] === 'perimenopause-menopause') energy -= 10; // Menopause energy changes
        if (answers['hormonal-status'] === 'pregnant') energy -= 8; // Pregnancy energy demands
        if (answers['hormonal-status'] === 'postpartum') energy -= 12; // Postpartum energy depletion
        if (answers['hormonal-status'] === 'other') energy -= 5; // Other hormonal energy issues
        
        // Long Covid factors
        if (answers['long-covid'] === 'currently-experiencing') energy -= 15; // Long Covid fatigue
        if (answers['long-covid'] === 'symptoms-improved') energy -= 8; // Residual fatigue
        
        return Math.max(20, energy);
    }

    private calculateAdvancedSleepQuality(answers: any): number {
        const sleepMap: Record<string, number> = {
            'insomnia': 25,
            'light-sleeper': 45,
            'like-royalty': 80
        };
        
        let sleep = sleepMap[answers.sleepQuality] || 50;
        
        // Relationship factors
        if (answers.relationship === 'single') sleep -= 5; // Single life can affect sleep quality
        if (answers.relationship === 'in-relationship') sleep += 3; // Relationship support improves sleep
        if (answers.relationship === 'married-partnered') sleep += 5; // Marriage/partnership provides better sleep
        if (answers.relationship === 'prefer-not-to-say') sleep -= 2; // Uncertainty can affect sleep
        
        // Hormonal status factors
        if (answers['hormonal-status'] === 'monthly-periods') sleep -= 3; // Monthly sleep disruptions
        if (answers['hormonal-status'] === 'perimenopause-menopause') sleep -= 10; // Menopause sleep issues
        if (answers['hormonal-status'] === 'pregnant') sleep -= 8; // Pregnancy sleep challenges
        if (answers['hormonal-status'] === 'postpartum') sleep -= 15; // Postpartum sleep deprivation
        if (answers['hormonal-status'] === 'other') sleep -= 5; // Other hormonal sleep issues
        
        // Long Covid factors
        if (answers['long-covid'] === 'currently-experiencing') sleep -= 12; // Long Covid sleep issues
        if (answers['long-covid'] === 'symptoms-improved') sleep -= 6; // Residual sleep problems
        
        return Math.max(20, Math.min(sleep, 100));
    }

    private calculateAdvancedDigestionQuality(answers: any): number {
        const digestionMap: Record<string, number> = {
            'constant-bloat': 35,
            'unpredictable': 55,
            'balanced-breezy': 80
        };
        
        let digestion = digestionMap[answers.digestion] || 50;
        
        // Health conditions factors
        if (answers['health-conditions']?.includes('digestive-disorder')) digestion -= 25;
        if (answers['health-conditions']?.includes('diabetes')) digestion -= 10;
        if (answers['health-conditions']?.includes('autoimmune')) digestion -= 15;
        if (answers['health-conditions']?.includes('high-blood-pressure')) digestion -= 5;
        
        // Long Covid factors
        if (answers['long-covid'] === 'currently-experiencing') digestion -= 10; // Long Covid digestive issues
        if (answers['long-covid'] === 'symptoms-improved') digestion -= 5; // Residual digestive problems
        
        return Math.max(20, digestion);
    }

    private calculateAdvancedSkinCondition(answers: any): number {
        const skinMap: Record<string, number> = {
            'dull': 40,
            'random': 60,
            'glowing': 85
        };
        return skinMap[answers['skin-saying']] || 50;
    }

    private calculateAdvancedImmunityLevel(answers: any): number {
        let immunity = 65;
        if (answers.activity === 'several-times') immunity -= 25;
        if (answers.activity === 'yes') immunity -= 15;
        if (answers.climate === 'variable') immunity -= 10;
        if (answers.climate === 'cold') immunity -= 5; // Cold climate can affect immunity
        if (answers.climate === 'hot-humid') immunity -= 8; // Hot humid climate can be stressful
        if (answers['self-care'] === 'not-really') immunity -= 15;
        // Location factors
        if (answers.location === 'urban') immunity -= 8; // Urban pollution affects immunity
        if (answers.location === 'rural') immunity += 5; // Rural areas generally have better air quality
        if (answers.location === 'coastal-mountainous') immunity += 3; // Fresh air benefits
        
        // Health conditions factors
        if (answers['health-conditions']?.includes('autoimmune')) immunity -= 20;
        if (answers['health-conditions']?.includes('diabetes')) immunity -= 15;
        if (answers['health-conditions']?.includes('digestive-disorder')) immunity -= 10;
        if (answers['health-conditions']?.includes('heart-cardiovascular')) immunity -= 8;
        if (answers['health-conditions']?.includes('high-blood-pressure')) immunity -= 5;
        
        // Long Covid factors
        if (answers['long-covid'] === 'currently-experiencing') immunity -= 15;
        if (answers['long-covid'] === 'symptoms-improved') immunity -= 8;
        
        return Math.max(25, immunity);
    }

    private calculateAdvancedCognitiveFunction(answers: any): number {
        const focusMap: Record<string, number> = {
            'where-am': 35,
            'decent-drifty': 55,
            'laser-sharp': 80
        };
        return focusMap[answers.focusLevel] || 50;
    }

    private calculateAdvancedDetoxNeeds(answers: any): number {
        let needs = 35;
        if (answers.climate === 'variable') needs += 25;
        if (answers.climate === 'hot-humid') needs += 15; // Hot humid climate increases detox needs
        if (answers.climate === 'cold') needs += 10; // Cold climate may require more detox
        if (answers.alcohol === 'daily') needs += 20;
        if (answers.smoking === 'a-few' || answers.smoking === "let-s-not-talk-about-it") needs += 25;
        if (answers.detox === 'only-post-indulgence') needs += 15;
        // Location factors
        if (answers.location === 'urban') needs += 20; // Urban pollution increases detox needs
        if (answers.location === 'suburban') needs += 10; // Some pollution exposure
        if (answers.location === 'rural') needs -= 5; // Cleaner environment
        if (answers.location === 'coastal-mountainous') needs -= 3; // Fresh air reduces detox needs
        return Math.min(needs, 95);
    }

    private calculateCardiovascularHealth(answers: any, age: number): number {
        let health = 70;
        
        // Age factor
        if (age > 50) health -= 15;
        if (age > 65) health -= 10;
        
        // Lifestyle factors
        if (answers.stressLevel === 'always-on') health -= 10;
        if (answers.dietType === 'mostly-beige') health -= 15;
        if (answers.movementFrequency === 'choreography') health -= 10;
        if (answers.goals && answers.goals.includes('healthy-heart')) health -= 5; // indicator of problem awareness
        
        // Health conditions factors
        if (answers['health-conditions']?.includes('high-blood-pressure')) health -= 20;
        if (answers['health-conditions']?.includes('diabetes')) health -= 15;
        if (answers['health-conditions']?.includes('heart-cardiovascular')) health -= 25;
        if (answers['health-conditions']?.includes('autoimmune')) health -= 10;
        if (answers['health-conditions']?.includes('digestive-disorder')) health -= 5;
        
        return Math.max(30, health);
    }

    private calculateJointBoneHealth(answers: any, age: number): number {
        let health = 75;
        
        // Age factor
        if (age > 45) health -= 10;
        if (age > 60) health -= 15;
        
        // Lifestyle factors
        if (answers.jointsMuscles === 'stiff-sore') health -= 25;
        if (answers.postureFlexibility === 'slouch-city') health -= 15;
        if (answers.movementFrequency === 'choreography') health -= 10;
        
        return Math.max(25, health);
    }

    private calculateHormonalBalance(answers: any, age: number, gender: string): number {
        let balance = 70;
        
        // Age and gender factors
        if (gender === 'female') {
            if (age > 40) balance -= 20;
            if (age > 50) balance -= 15;
        } else {
            if (age > 50) balance -= 15;
            if (age > 60) balance -= 10;
        }
        
        // Lifestyle factors
        if (answers.stressLevel === 'always-on') balance -= 15;
        if (answers.sleepQuality === 'insomnia') balance -= 10;
        
        // Hormonal status factors
        if (answers['hormonal-status'] === 'monthly-periods') {
            balance -= 5; // Monthly hormonal fluctuations
        }
        if (answers['hormonal-status'] === 'perimenopause-menopause') {
            balance -= 25; // Significant hormonal changes
        }
        if (answers['hormonal-status'] === 'pregnant') {
            balance -= 15; // Pregnancy hormonal changes
        }
        if (answers['hormonal-status'] === 'postpartum') {
            balance -= 20; // Postpartum hormonal adjustments
        }
        if (answers['hormonal-status'] === 'other') {
            balance -= 10; // Other hormonal issues
        }
        
        return Math.max(30, balance);
    }

    private calculateVisionHealth(answers: any, age: number): number {
        let vision = 80;
        if (age > 40) vision -= 20;
        if (age > 55) vision -= 15;
        if (age > 65) vision -= 10;
        // Assume modern screen-based lifestyle affects vision
        vision -= 10;
        return Math.max(30, vision);
    }

    private calculateUrinaryHealth(answers: any, age: number, gender: string): number {
        let health = 75;
        if (age > 50) health -= 15;
        if (age > 65) health -= 10;
        if (gender === 'female' && age > 45) health -= 10; // women more prone to UTIs
        return Math.max(40, health);
    }

    private calculateRespiratoryHealth(answers: any): number {
        let health = 70;
        if (answers.climate === 'variable') health -= 20;
        if (answers.climate === 'hot-humid') health -= 10; // Hot humid climate can affect breathing
        if (answers.climate === 'cold') health -= 5; // Cold climate can be harsh on respiratory system
        if (answers.smoking === 'a-few' || answers.smoking === "let-s-not-talk-about-it") health -= 25;
        // Location factors
        if (answers.location === 'urban') health -= 15; // Urban air pollution affects respiratory health
        if (answers.location === 'suburban') health -= 8; // Some pollution exposure
        if (answers.location === 'rural') health += 5; // Cleaner air
        if (answers.location === 'coastal-mountainous') health += 8; // Fresh mountain/sea air benefits
        return Math.max(35, health);
    }

    private calculateAgingConcerns(age: number, answers: any): number {
        let concerns = 0;
        
        // Basic age concerns
        if (age > 35) concerns = 40;
        if (age > 45) concerns = 60;
        if (age > 55) concerns = 75;
        if (age > 65) concerns = 85;
        
        // Additional factors
        if (answers['skin-saying'] === 'dull') concerns += 10;
        if (answers.stressLevel === 'always-on') concerns += 5;
        if (answers.goals && answers.goals.includes('longevity')) concerns += 10;
        
        return Math.min(concerns, 95);
    }

    private calculateDevelopmentalNeeds(age: number, answers: any): number {
        if (age >= 3 && age <= 18) {
            return 70 + (age <= 12 ? 20 : 0); // More needs in early age
        }
        return 0;
    }

    private calculateMatureHealth(age: number, gender: string, answers: any): number {
        if (age > 45) {
            let needs = 60;
            if (age > 55) needs += 15;
            if (age > 65) needs += 10;
            return needs;
        }
        return 30;
    }

    private calculateEnvironmentalToxins(answers: any): number {
        let exposure = 30;
        if (answers.climate === 'variable') exposure += 35;
        if (answers.climate === 'hot-humid') exposure += 20; // Hot humid climate can increase toxin exposure
        if (answers.climate === 'cold') exposure += 10; // Cold climate may have different toxin patterns
        if (answers.smoking === 'a-few' || answers.smoking === "let-s-not-talk-about-it") exposure += 25;
        if (answers.alcohol === 'daily') exposure += 15;
        // Location factors
        if (answers.location === 'urban') exposure += 30; // High urban pollution
        if (answers.location === 'suburban') exposure += 15; // Moderate pollution
        if (answers.location === 'rural') exposure -= 10; // Cleaner environment
        if (answers.location === 'coastal-mountainous') exposure -= 5; // Fresh air environment
        return Math.min(exposure, 90);
    }

    private calculatePhysicalActivity(answers: any): number {
        const activityMap: Record<string, number> = {
            'daily': 80,
            'few-times': 60,
            'choreography': 30
        };
        return activityMap[answers.movementFrequency] || 50;
    }

    private calculateMentalStrain(answers: any): number {
        let strain = 50;
        if (answers.stressLevel === 'always-on') strain += 25;
        if (answers.focusLevel === 'where-am') strain += 15;
        if (answers.caffeineIntake === 'more-4-cups') strain += 10;
        return Math.min(strain, 90);
    }

    private calculateNutritionalStatus(answers: any): number {
        const dietMap: Record<string, number> = {
            'fresh-vibrant': 80,
            'mixed-greens-convenience': 60,
            'mostly-beige': 35
        };
        return dietMap[answers.dietType] || 50;
    }

    private compileFinalRecommendations(selectedProducts: ScoredProduct[], answers: any, symptoms: ComprehensiveSymptomAnalysis): RecommendationResult {
        const recommended_products: ProductRecommendation[] = selectedProducts.map(item => ({
            product_id: item.product.id,
            product_name: item.product.name,
            category: item.product.category,
            subcategory: item.product.subcategory,
            main_benefits: item.product.primary_benefits,
            match_score: Math.round(item.score),
            reasoning: item.reasoning,
            priority_level: item.priority,
            effectiveness_estimate: item.effectiveness,
            dosage_recommendation: this.getDosageRecommendation(item.product, answers)
        }));

        return {
            recommended_products,
            effectiveness_score: this.calculateOverallEffectiveness(recommended_products),
            key_benefits: this.extractKeyBenefits(recommended_products),
            wellness_profile: this.determineWellnessProfile(recommended_products, symptoms),
            profile_description: this.generateProfileDescription(recommended_products, symptoms),
            recommended_kits: this.suggestProductKits(recommended_products, answers),
            lifestyle_insights: this.generateLifestyleInsights(symptoms, answers),
            usage_guidance: this.provideUsageGuidance(recommended_products, answers)
        };
    }

    private getDosageRecommendation(product: Product, answers: any): string {
        // Basic dosage recommendations based on category
        switch (product.category) {
            case 'Junior Hit':
                return 'For children: follow age recommendations on packaging';
            case 'Beauty Hit':
                return '1 ampoule per day, preferably in the morning';
            case 'Direct Hit':
                return '1-2 capsules per day according to instructions';
            default: // Classic Hit
                return '1-3 capsules per day with meals';
        }
    }

    private calculateOverallEffectiveness(products: ProductRecommendation[]): number {
        if (products.length === 0) return 0;
        
        const weightedScore = products.reduce((sum, product) => {
            const weight = product.priority_level === 'high' ? 1.2 : 
                          product.priority_level === 'medium' ? 1.0 : 0.8;
            return sum + (product.match_score * weight);
        }, 0);
        
        const avgScore = weightedScore / products.length;
        return Math.min(Math.round(avgScore), 95);
    }

    private extractKeyBenefits(products: ProductRecommendation[]): string[] {
        const allBenefits = products.flatMap(product => product.main_benefits);
        const benefitCounts: Record<string, number> = {};
        
        allBenefits.forEach(benefit => {
            benefitCounts[benefit] = (benefitCounts[benefit] || 0) + 1;
        });

        return Object.entries(benefitCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 6)
            .map(([benefit]) => this.translateBenefit(benefit));
    }

    private determineWellnessProfile(products: ProductRecommendation[], symptoms: ComprehensiveSymptomAnalysis): string {
        const primaryBenefits = products.flatMap(p => p.main_benefits);
        
        // Determine dominant needs
        const benefitCounts: Record<string, number> = {};
        primaryBenefits.forEach(benefit => {
            benefitCounts[benefit] = (benefitCounts[benefit] || 0) + 1;
        });
        
        const dominantBenefits = Object.entries(benefitCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([benefit]) => benefit);

        // Profiles based on dominant needs
        if (dominantBenefits.includes('stress_reduction') || dominantBenefits.includes('sleep_quality')) {
            return 'The Balancer';
        }
        if (dominantBenefits.includes('energy') || dominantBenefits.includes('cognitive_function')) {
            return 'The Energizer';
        }
        if (dominantBenefits.includes('detox') || dominantBenefits.includes('immune_support')) {
            return 'The Purifier';
        }
        if (dominantBenefits.includes('heart_health') || dominantBenefits.includes('anti_aging')) {
            return 'The Guardian';
        }
        if (dominantBenefits.includes('skin_health') || dominantBenefits.includes('beauty')) {
            return 'The Radiant';
        }
        if (symptoms.developmental_needs > 50) {
            return 'The Growing Mind';
        }

        return 'The All-Rounder';
    }

    private generateProfileDescription(products: ProductRecommendation[], symptoms: ComprehensiveSymptomAnalysis): string {
        const profile = this.determineWellnessProfile(products, symptoms);
        const descriptions: Record<string, string> = {
            'The Balancer': 'You seek harmony and inner peace, prioritizing stress management and restorative sleep in your wellness journey.',
            'The Energizer': 'You thrive on vitality and mental clarity, constantly optimizing your energy and cognitive performance.',
            'The Purifier': 'You focus on cleansing and renewal, supporting your body\'s natural detoxification and immune defenses.',
            'The Guardian': 'You take a proactive approach to long-term health, protecting your cardiovascular system and overall vitality.',
            'The Radiant': 'You embrace beauty from within, nurturing your skin and overall radiance through cellular health.',
            'The Growing Mind': 'You support harmonious development and growth, providing optimal conditions for physical and intellectual progress.',
            'The All-Rounder': 'You maintain balanced wellness across all aspects of health, adapting to your body\'s changing needs.'
        };
        
        return descriptions[profile] || 'You are on a personalized journey to optimal wellness.';
    }

    private suggestProductKits(products: ProductRecommendation[], answers: any): string[] {
        const kits: string[] = [];
        const age = answers.age || 30;
        
        // V Hit for multiple Classic Hit products
        const classicHitCount = products.filter(p => p.category === 'Classic Hit').length;
        if (classicHitCount >= 3) {
            kits.push('V Hit | Complete Wellness Set');
        }
        
        // Specialized kits based on needs
        if (products.some(p => p.category === 'Beauty Hit')) {
            kits.push('Beauty & Radiance Collection');
        }
        
        if (age >= 3 && age <= 18) {
            kits.push('Junior Wellness Pack');
        }
        
        if (products.some(p => p.subcategory.includes('Joint') || p.subcategory.includes('Bone'))) {
            kits.push('Mobility & Support Bundle');
        }
        
        return kits.slice(0, 2);
    }

    private generateLifestyleInsights(symptoms: ComprehensiveSymptomAnalysis, answers: any): string[] {
        const insights: string[] = [];
        
        if (symptoms.stress_level > 70) {
            insights.push('Regular stress reduction practices like meditation or yoga can significantly improve your overall condition.');
        }
        
        if (symptoms.sleep_quality < 40) {
            insights.push('Improving sleep hygiene can substantially increase your energy and overall wellbeing.');
        }
        
        if (symptoms.nutritional_status < 50) {
            insights.push('Balanced nutrition with emphasis on fresh vegetables and fruits will support your health at cellular level.');
        }
        
        if (symptoms.physical_activity < 40) {
            insights.push('Regular physical activity, even moderate, will improve circulation and metabolism.');
        }
        
        return insights.slice(0, 3);
    }

    private provideUsageGuidance(products: ProductRecommendation[], answers: any): string {
        const categories = products.map(p => p.category);
        
        if (categories.includes('Junior Hit')) {
            return 'For optimal results start with children\'s products, following age recommendations.';
        }
        
        if (categories.includes('Beauty Hit')) {
            return 'Premium beauty products are recommended to be taken in the morning for maximum absorption.';
        }
        
        if (products.length >= 4) {
            return 'For better absorption distribute product intake throughout the day, starting with high-priority ones.';
        }
        
        return 'Take products regularly according to recommendations to achieve optimal results.';
    }

    // Helper methods
    private generateComprehensiveReasoning(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): string[] {
        const reasoning: string[] = [];
        const primaryBenefits = product.primary_benefits;
        
        // Reasons based on symptoms
        if (primaryBenefits.includes('stress_reduction') && symptoms.stress_level > 70) {
            reasoning.push('Helps manage high stress levels');
        }
        
        if (primaryBenefits.includes('energy') && symptoms.energy_level < 40) {
            reasoning.push('Boosts energy levels and vitality');
        }
        
        if (primaryBenefits.includes('sleep_quality') && symptoms.sleep_quality < 50) {
            reasoning.push('Improves sleep quality and restorative properties');
        }
        
        // Reasons based on goals
        const goals: string[] = Array.isArray(answers.goals) ? answers.goals : [];
        const matchingGoals = goals.filter((goal: string) => 
            product.target_goals.includes(goal)
        );
        
        if (matchingGoals.length > 0) {
            reasoning.push(`Matches your goals: ${matchingGoals.slice(0, 2).join(', ')}`);
        }
        
        // Specific reasons for categories
        if (product.category === 'Junior Hit') {
            reasoning.push('Specifically designed to support growth and development');
        }
        
        if (product.category === 'Beauty Hit') {
            reasoning.push('Premium formula for inner radiance');
        }
        
        if (product.category === 'Direct Hit') {
            reasoning.push('Targeted support for specific body systems');
        }
        
        return reasoning.slice(0, 3);
    }

    private determineAdvancedPriority(product: Product, symptoms: ComprehensiveSymptomAnalysis, answers: any): 'high' | 'medium' | 'low' {
        const age = answers.age || 30;
        
        // High priority for critical needs
        if (this.isCriticalNeed(product, symptoms)) {
            return 'high';
        }
        
        // Medium priority for important but not critical needs
        if (this.isImportantNeed(product, symptoms)) {
            return 'medium';
        }
        
        // Special cases
        if (product.category === 'Junior Hit' && age >= 3 && age <= 18) {
            return 'high';
        }
        
        if (product.category === 'Beauty Hit' && symptoms.skin_condition < 50) {
            return 'medium';
        }
        
        return 'low';
    }

    private estimateProductEffectiveness(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let effectiveness = 65; // Base effectiveness
        
        // Increase effectiveness for matching symptoms
        const symptomMatch = this.calculateSymptomMatchScore(product, symptoms);
        effectiveness += symptomMatch * 0.3;
        
        // Consider demographics
        const age = answers.age || 30;
        const demographics = product.target_demographics;
        if (age >= demographics.age_preference.optimal[0] && age <= demographics.age_preference.optimal[1]) {
            effectiveness += 10;
        }
        
        // Bonus for proven formulas (Classic Hit)
        if (product.category === 'Classic Hit') {
            effectiveness += 5;
        }
        
        return Math.min(effectiveness, 90);
    }

    private translateBenefit(benefit: string): string {
        const translations: Record<string, string> = {
            'stress_reduction': 'stress reduction',
            'energy': 'energy',
            'sleep_quality': 'sleep quality',
            'digestion': 'digestion',
            'skin_health': 'skin health',
            'immune_support': 'immune support',
            'cognitive_function': 'cognitive function',
            'detox': 'detoxification',
            'heart_health': 'heart health',
            'joint_support': 'joint support',
            'bone_health': 'bone health',
            'hormonal_balance': 'hormonal balance',
            'vision_support': 'vision support',
            'urinary_health': 'urinary health',
            'prostate_health': 'prostate health',
            'menopausal_support': 'menopausal support',
            'anti_aging': 'anti-aging',
            'cellular_protection': 'cellular protection',
            'growth_support': 'growth support',
            'brain_development': 'brain development',
            'beauty': 'beauty',
            'vitality': 'vitality',
            'skin_radiance': 'skin radiance'
        };
        
        return translations[benefit] || benefit;
    }

    private checkLifestyleFactor(factor: string, answers: any): boolean {
        const factorMapping: Record<string, boolean> = {
            'urban-polluted': answers.climate === 'variable',
            'high-stress': answers.stressLevel === 'always-on',
            'poor-diet': answers.dietType === 'mostly-beige',
            'sedentary': answers.movementFrequency === 'choreography',
            'mental-work': answers.focusLevel === 'where-am',
            'low-immunity': answers.activity === 'several-times',
            'gut-issues': answers.digestion === 'constant-bloat',
            'aging-concerns': (answers.age || 30) > 45
        };
        
        return factorMapping[factor] || false;
    }

    private isCriticalNeed(product: Product, symptoms: ComprehensiveSymptomAnalysis): boolean {
        const criticalThresholds = {
            stress_level: 80,
            energy_level: 30,
            sleep_quality: 35,
            immunity_level: 40,
            cognitive_function: 45
        };
        
        const primaryBenefits = product.primary_benefits;
        
        return (
            (primaryBenefits.includes('stress_reduction') && symptoms.stress_level > criticalThresholds.stress_level) ||
            (primaryBenefits.includes('energy') && symptoms.energy_level < criticalThresholds.energy_level) ||
            (primaryBenefits.includes('sleep_quality') && symptoms.sleep_quality < criticalThresholds.sleep_quality) ||
            (primaryBenefits.includes('immune_support') && symptoms.immunity_level < criticalThresholds.immunity_level) ||
            (primaryBenefits.includes('cognitive_function') && symptoms.cognitive_function < criticalThresholds.cognitive_function)
        );
    }

    private isImportantNeed(product: Product, symptoms: ComprehensiveSymptomAnalysis): boolean {
        const importantThresholds = {
            stress_level: 65,
            energy_level: 45,
            digestion_quality: 50,
            skin_condition: 55,
            detox_needs: 60
        };
        
        const primaryBenefits = product.primary_benefits;
        
        return primaryBenefits.some(benefit => {
            switch (benefit) {
                case 'stress_reduction': return symptoms.stress_level > importantThresholds.stress_level;
                case 'energy': return symptoms.energy_level < importantThresholds.energy_level;
                case 'digestion': return symptoms.digestion_quality < importantThresholds.digestion_quality;
                case 'skin_health': return symptoms.skin_condition < importantThresholds.skin_condition;
                case 'detox': return symptoms.detox_needs > importantThresholds.detox_needs;
                default: return false;
            }
        });
    }

    private isHighPriorityProduct(product: Product, symptoms: ComprehensiveSymptomAnalysis): boolean {
        return this.isCriticalNeed(product, symptoms) || 
               (product.category === 'Direct Hit' && this.hasSeriousSpecificIssue(product, symptoms));
    }

    private hasSeriousSpecificIssue(product: Product, symptoms: ComprehensiveSymptomAnalysis): boolean {
        const seriousThresholds = {
            cardiovascular_health: 50,
            joint_bone_health: 45,
            hormonal_balance: 40,
            vision_health: 55,
            urinary_health: 50
        };
        
        const primaryBenefits = product.primary_benefits;
        
        return (
            (primaryBenefits.includes('heart_health') && symptoms.cardiovascular_health < seriousThresholds.cardiovascular_health) ||
            (primaryBenefits.includes('joint_support') && symptoms.joint_bone_health < seriousThresholds.joint_bone_health) ||
            (primaryBenefits.includes('hormonal_balance') && symptoms.hormonal_balance < seriousThresholds.hormonal_balance) ||
            (primaryBenefits.includes('vision_support') && symptoms.vision_health < seriousThresholds.vision_health) ||
            (primaryBenefits.includes('urinary_health') && symptoms.urinary_health < seriousThresholds.urinary_health)
        );
    }

    private isComprehensiveSolution(product: Product): boolean {
        // Products with broad spectrum of action
        const comprehensiveBenefits = ['immune_support', 'energy', 'detox', 'stress_reduction', 'cellular_protection'];
        const hasMultipleBenefits = product.primary_benefits.filter(benefit => 
            comprehensiveBenefits.includes(benefit)
        ).length >= 2;
        
        return hasMultipleBenefits || product.category === 'Classic Hit';
    }

    private hasMultipleSeriousIssues(answers: any): boolean {
        // Simple heuristic for complex cases
        let seriousIssues = 0;
        
        if (answers.stressLevel === 'always-on') seriousIssues++;
        if (answers.energyLevel === 'low-energy') seriousIssues++;
        if (answers.sleepQuality === 'insomnia') seriousIssues++;
        if (answers.digestion === 'constant-bloat') seriousIssues++;
        if (answers.activity === 'several-times') seriousIssues++;
        
        return seriousIssues >= 3;
    }

    private calculateSymptomMatchScore(product: Product, symptoms: ComprehensiveSymptomAnalysis): number {
        let match = 0;
        const primaryBenefits = product.primary_benefits;
        
        // Simplified symptom match calculation
        const symptomWeights: Record<string, number> = {
            'stress_reduction': symptoms.stress_level > 70 ? 25 : 0,
            'energy': symptoms.energy_level < 40 ? 25 : 0,
            'sleep_quality': symptoms.sleep_quality < 50 ? 20 : 0,
            'digestion': symptoms.digestion_quality < 60 ? 15 : 0,
            'skin_health': symptoms.skin_condition < 60 ? 15 : 0,
            'immune_support': symptoms.immunity_level < 50 ? 20 : 0,
            'cognitive_function': symptoms.cognitive_function < 60 ? 20 : 0,
            'detox': symptoms.detox_needs > 60 ? 15 : 0
        };
        
        primaryBenefits.forEach(benefit => {
            if (symptomWeights[benefit]) {
                match += symptomWeights[benefit];
            }
        });
        
        return Math.min(match, 100);
    }

    private calculateLifestyleSpecificFactors(product: Product, answers: any, symptoms: ComprehensiveSymptomAnalysis): number {
        let factors = 0;
        const lifestyle = answers.lifestyle;

        // Sedentary lifestyle factors
        if (lifestyle === 'sedentary') {
            // Products that help with circulation, energy, and joint health
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 20;
            }
            if (product.primary_benefits.includes('joint_support') || product.primary_benefits.includes('bone_health')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 15;
            }
            // Products for mental clarity and focus
            if (product.primary_benefits.includes('cognitive_function')) {
                factors += 10;
            }
        }

        // Balanced lifestyle factors
        if (lifestyle === 'balanced') {
            // General wellness products
            if (product.primary_benefits.includes('immune_support') || product.primary_benefits.includes('detox')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 10;
            }
            // Preventive health products
            if (product.primary_benefits.includes('anti_aging') || product.primary_benefits.includes('cellular_protection')) {
                factors += 10;
            }
        }

        // Active lifestyle factors
        if (lifestyle === 'active') {
            // Recovery and joint support
            if (product.primary_benefits.includes('joint_support') || product.primary_benefits.includes('bone_health')) {
                factors += 20;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 15;
            }
            // Energy and performance
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 15;
            }
            // Anti-inflammatory benefits
            if (product.primary_benefits.includes('detox') || product.primary_benefits.includes('cellular_protection')) {
                factors += 10;
            }
        }

        // Highly active lifestyle factors
        if (lifestyle === 'highly-active') {
            // High-performance and recovery products
            if (product.primary_benefits.includes('joint_support') || product.primary_benefits.includes('bone_health')) {
                factors += 25;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 20;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 20;
            }
            // Anti-inflammatory and recovery
            if (product.primary_benefits.includes('detox') || product.primary_benefits.includes('cellular_protection')) {
                factors += 15;
            }
            // Heart health for athletes
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 15;
            }
        }

        // Location-specific factors
        const location = answers.location;
        
        // Urban location factors
        if (location === 'urban') {
            // Products for pollution protection and detox
            if (product.primary_benefits.includes('detox') || product.primary_benefits.includes('cellular_protection')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('antioxidant')) {
                factors += 10;
            }
            // Respiratory health for urban pollution
            if (product.primary_benefits.includes('respiratory_health') || product.primary_benefits.includes('lung_support')) {
                factors += 12;
            }
        }

        // Rural location factors
        if (location === 'rural') {
            // General wellness and natural products
            if (product.primary_benefits.includes('immune_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 5;
            }
        }

        // Coastal/mountainous location factors
        if (location === 'coastal-mountainous') {
            // Products for outdoor activities and environmental protection
            if (product.primary_benefits.includes('joint_support') || product.primary_benefits.includes('bone_health')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 8;
            }
            // Skin protection for outdoor activities
            if (product.primary_benefits.includes('skin_health') || product.primary_benefits.includes('skin_radiance')) {
                factors += 6;
            }
        }

        // Suburban location factors
        if (location === 'suburban') {
            // Balanced approach for suburban living
            if (product.primary_benefits.includes('immune_support')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('detox')) {
                factors += 5;
            }
        }

        // Relationship-specific factors
        const relationship = answers.relationship;
        
        // Single lifestyle factors
        if (relationship === 'single') {
            // Products for stress management and energy
            if (product.primary_benefits.includes('stress_reduction') || product.primary_benefits.includes('relaxation')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('sleep_quality')) {
                factors += 5;
            }
            // Self-care and wellness products
            if (product.primary_benefits.includes('self_care') || product.primary_benefits.includes('wellness')) {
                factors += 4;
            }
        }

        // In relationship factors
        if (relationship === 'in-relationship') {
            // Products for emotional balance and energy
            if (product.primary_benefits.includes('hormonal_balance')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 4;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 4;
            }
        }

        // Married/partnered factors
        if (relationship === 'married-partnered') {
            // Products for long-term health and stability
            if (product.primary_benefits.includes('anti_aging') || product.primary_benefits.includes('longevity')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('bone_health') || product.primary_benefits.includes('joint_support')) {
                factors += 5;
            }
            // Family wellness products
            if (product.primary_benefits.includes('immune_support')) {
                factors += 4;
            }
        }

        // Prefer not to say factors
        if (relationship === 'prefer-not-to-say') {
            // General wellness products
            if (product.primary_benefits.includes('immune_support')) {
                factors += 5;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 4;
            }
            if (product.primary_benefits.includes('stress_reduction')) {
                factors += 3;
            }
        }

        // Hormonal status-specific factors
        const hormonalStatus = answers['hormonal-status'];
        
        // Monthly periods factors
        if (hormonalStatus === 'monthly-periods') {
            // Products for hormonal balance and PMS support
            if (product.primary_benefits.includes('hormonal_balance')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('iron_support') || product.primary_benefits.includes('blood_health')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('mood_support') || product.primary_benefits.includes('emotional_balance')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 4;
            }
        }

        // Perimenopause/menopause factors
        if (hormonalStatus === 'perimenopause-menopause') {
            // Products for menopause support and bone health
            if (product.primary_benefits.includes('hormonal_balance') || product.primary_benefits.includes('menopausal_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('bone_health') || product.primary_benefits.includes('calcium_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('sleep_quality')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('mood_support') || product.primary_benefits.includes('emotional_balance')) {
                factors += 6;
            }
        }

        // Pregnancy factors
        if (hormonalStatus === 'pregnant') {
            // Products for pregnancy support and fetal development
            if (product.primary_benefits.includes('prenatal_support') || product.primary_benefits.includes('pregnancy_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('folate_support') || product.primary_benefits.includes('folic_acid')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('iron_support') || product.primary_benefits.includes('blood_health')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('calcium_support') || product.primary_benefits.includes('bone_health')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 6;
            }
        }

        // Postpartum factors
        if (hormonalStatus === 'postpartum') {
            // Products for postpartum recovery and breastfeeding support
            if (product.primary_benefits.includes('postpartum_support') || product.primary_benefits.includes('recovery_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('hormonal_balance')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('mood_support') || product.primary_benefits.includes('emotional_balance')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('sleep_quality')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 5;
            }
        }

        // Other hormonal factors
        if (hormonalStatus === 'other') {
            // General hormonal support products
            if (product.primary_benefits.includes('hormonal_balance')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('endocrine_support')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 4;
            }
            if (product.primary_benefits.includes('mood_support')) {
                factors += 4;
            }
        }

        // Health conditions-specific factors
        const healthConditions = answers['health-conditions'] || [];
        
        // High blood pressure factors
        if (healthConditions.includes('high-blood-pressure')) {
            // Products for cardiovascular health and blood pressure support
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('blood_pressure_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('circulation_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('stress_reduction')) {
                factors += 6;
            }
        }

        // Diabetes factors
        if (healthConditions.includes('diabetes')) {
            // Products for blood sugar support and diabetes management
            if (product.primary_benefits.includes('blood_sugar_support') || product.primary_benefits.includes('glucose_metabolism')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('diabetes_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('metabolism_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('nerve_health') || product.primary_benefits.includes('neuropathy_support')) {
                factors += 10;
            }
        }

        // Autoimmune condition factors
        if (healthConditions.includes('autoimmune')) {
            // Products for immune system support and inflammation
            if (product.primary_benefits.includes('immune_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('anti_inflammatory') || product.primary_benefits.includes('inflammation_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('autoimmune_support')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('antioxidant')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('detox')) {
                factors += 6;
            }
        }

        // Digestive disorder factors
        if (healthConditions.includes('digestive-disorder')) {
            // Products for digestive health and gut support
            if (product.primary_benefits.includes('digestive_health') || product.primary_benefits.includes('gut_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('probiotic_support') || product.primary_benefits.includes('microbiome_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('digestive_enzymes')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('intestinal_health')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('anti_inflammatory')) {
                factors += 6;
            }
        }

        // Heart/cardiovascular factors
        if (healthConditions.includes('heart-cardiovascular')) {
            // Products for heart health and cardiovascular support
            if (product.primary_benefits.includes('heart_health') || product.primary_benefits.includes('cardiovascular_health')) {
                factors += 20;
            }
            if (product.primary_benefits.includes('circulation_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('cholesterol_support')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('blood_pressure_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('omega_3_support') || product.primary_benefits.includes('fish_oil')) {
                factors += 6;
            }
        }

        // Other health conditions factors
        if (healthConditions.includes('other')) {
            // General health support products
            if (product.primary_benefits.includes('immune_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('general_health') || product.primary_benefits.includes('wellness_support')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('antioxidant')) {
                factors += 5;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 4;
            }
        }

        // Long Covid-specific factors
        const longCovid = answers['long-covid'];
        
        // Currently experiencing Long Covid factors
        if (longCovid === 'currently-experiencing') {
            // Products for Long Covid recovery and symptom management
            if (product.primary_benefits.includes('long_covid_support') || product.primary_benefits.includes('post_covid_support')) {
                factors += 20;
            }
            if (product.primary_benefits.includes('immune_support')) {
                factors += 15;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('cognitive_function') || product.primary_benefits.includes('brain_health')) {
                factors += 10;
            }
            if (product.primary_benefits.includes('sleep_quality')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('anti_inflammatory') || product.primary_benefits.includes('inflammation_support')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('respiratory_health') || product.primary_benefits.includes('lung_support')) {
                factors += 6;
            }
        }

        // Improved Long Covid symptoms factors
        if (longCovid === 'symptoms-improved') {
            // Products for continued recovery and prevention
            if (product.primary_benefits.includes('immune_support')) {
                factors += 12;
            }
            if (product.primary_benefits.includes('energy') || product.primary_benefits.includes('vitality')) {
                factors += 8;
            }
            if (product.primary_benefits.includes('antioxidant')) {
                factors += 6;
            }
            if (product.primary_benefits.includes('detox')) {
                factors += 5;
            }
            if (product.primary_benefits.includes('general_health') || product.primary_benefits.includes('wellness_support')) {
                factors += 4;
            }
        }

        return Math.min(factors, 30); // Cap at 30 points to avoid overwhelming other factors
    }
}