// src/utils/recommendationEngine.tsx
import { productsData } from '../../../config/projectVProducts';

export interface ProductRecommendation {
    product_id: string;
    product_name: string;
    score: number;
    match_percentage: number;
    main_benefits: string[];
    price_eur: number;
    capsules: number;
    main_purpose: string;
}

export interface RecommendationResult {
    recommended_products: ProductRecommendation[];
    key_benefits: string[];
    effectiveness_score: number;
    coefficients_used: Record<string, number>;
    total_raw_score: number;
}

export class ProjectVRecommendationEngine {
    private products = productsData.products;

    /**
     * Расчет базовых коэффициентов на основе персональной информации
     */
    private calculateBaseCoefficients(personalAnswers: Record<string, any>): Record<string, number> {
        const coefficients: Record<string, number> = {};

        const gender = personalAnswers.gender || 'female';
        const age = personalAnswers.age || 35;
        const goals: string[] = personalAnswers.goals || [];
        const climate = personalAnswers.climate || 'urban-polluted';

        this.products.forEach(product => {
            let coeff = 1.0;

            // Коэффициент по возрасту
            const agePref = product.target_demographics.age_preference;
            if (age < agePref.min) {
                coeff *= 0.7;
            } else if (age > agePref.max) {
                coeff *= 0.8;
            } else if (age >= agePref.optimal[0] && age <= agePref.optimal[1]) {
                coeff *= 1.2;
            }

            // Коэффициент по целям
            const productGoals = product.target_goals;
            const goalMatch = goals.filter(goal => productGoals.includes(goal)).length;
            if (goalMatch > 0) {
                coeff *= 1.0 + (goalMatch * 0.3);
            }

            // Коэффициент по климату и образу жизни
            const climateFactors: Record<string, Record<string, number>> = {
                'urban-polluted': { 'A': 1.3, 'D': 1.2, 'CH': 0.9 },
                'cold-winters': { 'M': 1.2, 'G': 1.1, 'MGR': 1.1 },
                'sunny-warm': { 'SV': 1.1, 'CH': 1.2 },
                'cool-rainy': { 'P': 1.1, 'MGR': 1.1 },
                'rural-nature': { 'S': 1.1, 'N': 1.0 }
            };

            if (climateFactors[climate] && climateFactors[climate][product.id]) {
                coeff *= climateFactors[climate][product.id];
            }

            coefficients[product.id] = Math.round(coeff * 100) / 100;
        });

        return coefficients;
    }

    /**
     * Расчет баллов по ответам на вопросы с учетом коэффициентов
     */
    private calculateQuestionScores(
        answers: Record<string, any>, 
        coefficients: Record<string, number>
    ): Record<string, number> {
        const scores: Record<string, number> = {};
        this.products.forEach(product => {
            scores[product.id] = 0.0;
        });

        // Morning Energy блок
        const energyScores: Record<string, Record<string, number>> = {
            'dragged': { 'CH': 15, 'G': 12, 'MGR': 8 },
            'snooze': { 'CH': 10, 'G': 8, 'P': 6 },
            'bright-eyed': { 'A': 5, 'M': 5 }
        };

        if (energyScores[answers.morningEnergy]) {
            Object.entries(energyScores[answers.morningEnergy]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Energy level throughout day
        const energyDayScores: Record<string, Record<string, number>> = {
            'low-energy': { 'CH': 20, 'G': 15, 'M': 10 },
            'some-days-fab': { 'CH': 10, 'A': 8, 'MGR': 6 },
            'energized-unstoppable': { 'A': 5, 'M': 5 }
        };

        if (energyDayScores[answers.energyLevel]) {
            Object.entries(energyDayScores[answers.energyLevel]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Focus level
        const focusScores: Record<string, Record<string, number>> = {
            'where-am': { 'CH': 12, 'G': 10, 'M': 8 },
            'decent-drifty': { 'CH': 8, 'M': 6, 'G': 5 },
            'laser-sharp': { 'A': 5, 'M': 3 }
        };

        if (focusScores[answers.focusLevel]) {
            Object.entries(focusScores[answers.focusLevel]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Caffeine intake
        const caffeineScores: Record<string, Record<string, number>> = {
            'more-4-cups': { 'P': 10, 'MGR': 8, 'A': 6 },
            '1-2-cups': { 'CH': 5, 'A': 3 },
            'dont-drink': { 'CH': 8, 'G': 6 }
        };

        if (caffeineScores[answers.caffeineIntake]) {
            Object.entries(caffeineScores[answers.caffeineIntake]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Movement блок
        const movementScores: Record<string, Record<string, number>> = {
            'choreography': { 'CH': 12, 'SV': 10, 'D': 8 },
            'few-times': { 'CH': 6, 'A': 5, 'M': 5 },
            'daily': { 'A': 8, 'M': 6 }
        };

        if (movementScores[answers.movementFrequency]) {
            Object.entries(movementScores[answers.movementFrequency]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Joints and muscles
        const jointsScores: Record<string, Record<string, number>> = {
            'stiff-sore': { 'MGR': 12, 'A': 8, 'D': 6 },
            'on-off': { 'MGR': 8, 'A': 5 },
            'flexible-fierce': { 'A': 3, 'M': 3 }
        };

        if (jointsScores[answers.jointsMuscles]) {
            Object.entries(jointsScores[answers.jointsMuscles]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Stiffness and inflammation
        const inflammationScores: Record<string, Record<string, number>> = {
            'constant-tension': { 'MGR': 15, 'A': 10, 'D': 8 },
            'mild-soreness': { 'MGR': 8, 'A': 6 },
            'stretch-cool': { 'A': 3, 'M': 3 }
        };

        if (inflammationScores[answers.stiffnessInflammation]) {
            Object.entries(inflammationScores[answers.stiffnessInflammation]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Nutrition блок
        const nutritionScores: Record<string, Record<string, number>> = {
            'mostly-beige': { 'SV': 15, 'S': 12, 'D': 10 },
            'mixed-greens-convenience': { 'S': 8, 'SV': 6, 'A': 5 },
            'fresh-vibrant': { 'A': 8, 'S': 5 }
        };

        if (nutritionScores[answers.dietType]) {
            Object.entries(nutritionScores[answers.dietType]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Cravings
        const cravingsScores: Record<string, Record<string, number>> = {
            'sugar-spirit-animal': { 'SV': 15, 'S': 10, 'MGR': 8 },
            'sweet-salty': { 'SV': 10, 'S': 6 },
            'balanced-chic': { 'A': 5, 'S': 3 }
        };

        if (cravingsScores[answers.cravings]) {
            Object.entries(cravingsScores[answers.cravings]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Plate content
        const plateScores: Record<string, Record<string, number>> = {
            'all-beige': { 'SV': 12, 'S': 10, 'D': 8 },
            'half-vibrant-bland': { 'SV': 8, 'S': 6, 'A': 4 },
            'colorful-veggie-forward': { 'A': 6, 'S': 4 }
        };

        if (plateScores[answers.plate]) {
            Object.entries(plateScores[answers.plate]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Antioxidant-rich foods
        const antioxidantScores: Record<string, Record<string, number>> = {
            'rarely': { 'A': 15, 'D': 10 },
            'a-few-times': { 'A': 8, 'D': 5 },
            'daily': { 'A': 3 }
        };

        if (antioxidantScores[answers['antioxidant-rich']]) {
            Object.entries(antioxidantScores[answers['antioxidant-rich']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Digestion
        const digestionScores: Record<string, Record<string, number>> = {
            'constant-bloat': { 'S': 20, 'D': 10, 'SV': 8 },
            'unpredictable': { 'S': 12, 'D': 6 },
            'balanced-breezy': { 'A': 5, 'S': 3 }
        };

        if (digestionScores[answers.digestion]) {
            Object.entries(digestionScores[answers.digestion]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Detox habits
        const detoxScores: Record<string, Record<string, number>> = {
            'only-post-indulgence': { 'D': 15, 'S': 10, 'A': 8 },
            'weekly': { 'D': 8, 'S': 6 },
            'daily': { 'A': 5, 'S': 3 }
        };

        if (detoxScores[answers.detox]) {
            Object.entries(detoxScores[answers.detox]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Blood sugar status
        const sugarScores: Record<string, Record<string, number>> = {
            'constant-cravings': { 'SV': 15, 'MGR': 10, 'S': 8 },
            'dips-spikes': { 'SV': 10, 'MGR': 6 },
            'balanced': { 'A': 3, 'M': 3 }
        };

        if (sugarScores[answers['sugar-status']]) {
            Object.entries(sugarScores[answers['sugar-status']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Sleep & Stress блок
        const sleepScores: Record<string, Record<string, number>> = {
            'insomnia': { 'P': 20, 'MGR': 15, 'M': 8 },
            'light-sleeper': { 'P': 12, 'MGR': 10 },
            'like-royalty': { 'A': 5, 'M': 5 }
        };

        if (sleepScores[answers.sleepQuality]) {
            Object.entries(sleepScores[answers.sleepQuality]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Stress level (tech/stress unplugging)
        const stressUnplugScores: Record<string, Record<string, number>> = {
            'always-on': { 'P': 15, 'MGR': 12, 'CH': 8 },
            'sometimes': { 'P': 8, 'MGR': 6 },
            'breathe-space': { 'A': 3, 'M': 3 }
        };

        if (stressUnplugScores[answers.stressLevel]) {
            Object.entries(stressUnplugScores[answers.stressLevel]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Stress management
        const stressScores: Record<string, Record<string, number>> = {
            'chocolate-chaos': { 'P': 18, 'MGR': 15, 'CH': 8 },
            'hopping-therapy': { 'MGR': 10, 'P': 8 },
            'zen-rituals': { 'A': 5, 'M': 5 }
        };

        if (stressScores[answers.stressManagement]) {
            Object.entries(stressScores[answers.stressManagement]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Self-care
        const selfCareScores: Record<string, Record<string, number>> = {
            'not-really': { 'P': 12, 'MGR': 10, 'A': 8 },
            'trying-my-best': { 'P': 6, 'MGR': 5 },
            'weekly-luxe-rituals': { 'A': 3, 'M': 3 }
        };

        if (selfCareScores[answers['self-care']]) {
            Object.entries(selfCareScores[answers['self-care']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Skin condition
        const skinScores: Record<string, Record<string, number>> = {
            'dull': { 'A': 15, 'D': 10, 'SV': 8 },
            'random': { 'A': 10, 'D': 6 },
            'glowing': { 'A': 3 }
        };

        if (skinScores[answers['skin-saying']]) {
            Object.entries(skinScores[answers['skin-saying']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Indulgence блок
        const alcoholScores: Record<string, Record<string, number>> = {
            'daily': { 'D': 15, 'A': 10, 'N': 8 },
            'weekends': { 'D': 8, 'A': 6 },
            'rarely': { 'A': 3 }
        };

        if (alcoholScores[answers.alcohol]) {
            Object.entries(alcoholScores[answers.alcohol]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Smoking/habits
        const smokingScores: Record<string, Record<string, number>> = {
            "let-s-not-talk-about-it": { 'D': 15, 'A': 12, 'N': 8 },
            'a-few': { 'D': 8, 'A': 6 },
            'none': { 'A': 3 }
        };

        if (smokingScores[answers.smoking]) {
            Object.entries(smokingScores[answers.smoking]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Sugary drinks
        const sugarDrinksScores: Record<string, Record<string, number>> = {
            'daily-dose-of-bubble-tea': { 'SV': 15, 'D': 10, 'S': 8 },
            'sometimes': { 'SV': 8, 'D': 5 },
            'almost-never': { 'A': 3 }
        };

        if (sugarDrinksScores[answers['sugar-drinks']]) {
            Object.entries(sugarDrinksScores[answers['sugar-drinks']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Environment блок
        const environmentScores: Record<string, Record<string, number>> = {
            'concrete-jungle': { 'A': 12, 'D': 10, 'CH': 8 },
            'weekends': { 'A': 6, 'D': 5 },
            'daily': { 'A': 3, 'M': 3 }
        };

        if (environmentScores[answers.environment]) {
            Object.entries(environmentScores[answers.environment]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Fresh air breaks
        const freshAirScores: Record<string, Record<string, number>> = {
            'rarely': { 'A': 10, 'D': 8, 'CH': 6 },
            'sometimes': { 'A': 5, 'D': 4 },
            'yes': { 'A': 2 }
        };

        if (freshAirScores[answers['fresh-air']]) {
            Object.entries(freshAirScores[answers['fresh-air']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Sunlight exposure
        const sunlightScores: Record<string, Record<string, number>> = {
            'barely-any': { 'CH': 12, 'A': 10, 'D': 8 },
            'some-days': { 'CH': 6, 'A': 5 },
            '20+ minutes': { 'A': 2 }
        };

        if (sunlightScores[answers['sunlight-exposure']]) {
            Object.entries(sunlightScores[answers['sunlight-exposure']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Pollution exposure
        const pollutionScores: Record<string, Record<string, number>> = {
            'i-breathe-it-in': { 'A': 15, 'D': 12, 'CH': 8 },
            'try': { 'A': 8, 'D': 6 },
            'i-detox-regularly': { 'A': 5, 'D': 3 }
        };

        if (pollutionScores[answers['pollution-exposure']]) {
            Object.entries(pollutionScores[answers['pollution-exposure']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Nature escapes
        const natureScores: Record<string, Record<string, number>> = {
            "what-s-that": { 'A': 10, 'D': 8, 'P': 6 },
            'sometimes': { 'A': 5, 'D': 4 },
            'monthly': { 'A': 2 }
        };

        if (natureScores[answers['nature-escapes']]) {
            Object.entries(natureScores[answers['nature-escapes']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        // Tech disconnect
        const techScores: Record<string, Record<string, number>> = {
            'always-online': { 'P': 15, 'MGR': 12, 'A': 8 },
            'half-scrolling': { 'P': 8, 'MGR': 6 },
            'off-grid-goddess': { 'A': 3, 'M': 3 }
        };

        if (techScores[answers['disconnect-from-tech']]) {
            Object.entries(techScores[answers['disconnect-from-tech']]).forEach(([productId, score]) => {
                scores[productId] += score * (coefficients[productId] || 1.0);
            });
        }

        return scores;
    }

    /**
     * Главная функция для получения рекомендаций
     */
    public getRecommendations(allAnswers: Record<string, any>): RecommendationResult {
        // Проверяем, что у нас есть ответы
        if (!allAnswers || Object.keys(allAnswers).length === 0) {
            throw new Error('No answers provided');
        }

        // Разделяем ответы на персональные и остальные
        const personalKeys = ['gender', 'age', 'goals', 'climate', 'activity'];
        const personalAnswers: Record<string, any> = {};
        const questionAnswers: Record<string, any> = {};

        Object.entries(allAnswers).forEach(([key, value]) => {
            if (personalKeys.includes(key)) {
                personalAnswers[key] = value;
            } else {
                questionAnswers[key] = value;
            }
        });

        // Рассчитываем коэффициенты
        const coefficients = this.calculateBaseCoefficients(personalAnswers);

        // Рассчитываем баллы
        const scores = this.calculateQuestionScores(questionAnswers, coefficients);

        // Сортируем продукты по баллам
        const sortedProducts = Object.entries(scores)
            .filter(([, score]) => score > 0) // Фильтруем продукты с нулевыми баллами
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3);

        // Если нет продуктов с положительными баллами, берем первые 3
        if (sortedProducts.length === 0) {
            const allProducts = Object.entries(scores).sort(([,a], [,b]) => b - a).slice(0, 3);
            sortedProducts.push(...allProducts);
        }

        // Рассчитываем проценты соответствия
        const scoreValues = Object.values(scores);
        const maxScore = scoreValues.length > 0 ? Math.max(...scoreValues) : 0;

        const recommendations: ProductRecommendation[] = sortedProducts.map(([productId, score]) => {
            const productInfo = this.products.find(p => p.id === productId);
            if (!productInfo) {
                throw new Error(`Product with ID ${productId} not found`);
            }

            const matchPercentage = maxScore > 0 ? 
                Math.max(30, Math.min(100, Math.round((score / maxScore) * 100))) : 30;

            return {
                product_id: productId,
                product_name: productInfo.name,
                score: Math.round(score * 10) / 10,
                match_percentage: matchPercentage,
                main_benefits: productInfo.health_benefits.slice(0, 3),
                price_eur: productInfo.price_eur,
                capsules: productInfo.capsules,
                main_purpose: productInfo.main_purpose
            };
        });

        // Определяем ключевые проблемы, которые решают рекомендованные продукты
        const allBenefits: string[] = recommendations.flatMap(rec => rec.main_benefits);
        const benefitCounts: Record<string, number> = {};
        allBenefits.forEach(benefit => {
            benefitCounts[benefit] = (benefitCounts[benefit] || 0) + 1;
        });

        const keyBenefits = Object.entries(benefitCounts)
            .sort(([,a], [,b]) => b - a)
            .slice(0, 3)
            .map(([benefit]) => benefit);

        // Итоговый балл эффективности
        const totalScore = recommendations.reduce((sum, rec) => sum + rec.score, 0);
        const effectivenessScore = Math.max(60, Math.min(100, Math.round((totalScore / 150) * 100)));

        return {
            recommended_products: recommendations,
            key_benefits: keyBenefits,
            effectiveness_score: effectivenessScore,
            coefficients_used: coefficients,
            total_raw_score: Math.round(totalScore * 10) / 10
        };
    }
}
