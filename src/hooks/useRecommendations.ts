import { useState, useEffect, useMemo } from 'react';
import { ProjectVRecommendationEngine, RecommendationResult } from '../components/quiz-pages/quiz-results/recommendationEngine';

export const useRecommendations = (answers: Record<string, any>) => {
  const [recommendations, setRecommendations] = useState<RecommendationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const engine = useMemo(() => new ProjectVRecommendationEngine(), []);

  useEffect(() => {
    if (!answers || Object.keys(answers).length === 0) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = engine.getRecommendations(answers);
      setRecommendations(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate recommendations');
      console.error('Recommendation engine error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [answers, engine]);

  return {
    recommendations,
    isLoading,
    error,
    hasRecommendations: recommendations && recommendations.recommended_products.length > 0
  };
};
