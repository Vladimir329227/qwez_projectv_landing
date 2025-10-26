import { useState, useEffect, useMemo, useRef } from 'react';
import { ProjectVRecommendationEngine, RecommendationResult } from '../components/quiz-pages/quiz-results/recommendationEngine';
import { sendQuizResultsToTelegram, QuizSubmissionData } from '../utils/telegramSender';

export const useRecommendations = (answers: Record<string, any>, shouldSendToTelegram: boolean = true) => {
  const [recommendations, setRecommendations] = useState<RecommendationResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sentToTelegramRef = useRef<string | null>(null); // Track sent submissions

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
      
      // Only send to Telegram if explicitly requested
      if (shouldSendToTelegram) {
        // Create a stable key for this submission to prevent duplicates
        const submissionKey = `${answers.name || 'anonymous'}_${answers.email || 'no-email'}_${JSON.stringify(answers)}`;
        
        // Check if we've already sent this submission to Telegram
        if (sentToTelegramRef.current === submissionKey) {
          console.log('Submission already sent to Telegram, skipping duplicate');
          return;
        }
        
        // Send results to Telegram
        const submissionData: QuizSubmissionData = {
          answers,
          recommendations: result,
          timestamp: new Date().toISOString(),
          userInfo: {
            name: answers.name,
            email: answers.email,
            age: answers.age,
            gender: answers.gender
          }
        };
        
        // Mark as sent before making the request
        sentToTelegramRef.current = submissionKey;
        
        // Send to Telegram asynchronously (don't wait for response)
        sendQuizResultsToTelegram(submissionData).then(success => {
          if (success) {
            console.log('Quiz results sent to Telegram successfully');
            // Mark as sent in localStorage to prevent future sends
            try {
              localStorage.setItem('telegram.results.sent', 'true');
            } catch (error) {
              console.warn('Failed to save Telegram sent status:', error);
            }
          } else {
            console.warn('Failed to send quiz results to Telegram after all retries');
            // Reset the ref on failure so it can be retried later
            sentToTelegramRef.current = null;
            // Don't mark as sent in localStorage if it failed
          }
        }).catch(err => {
          console.error('Error sending quiz results to Telegram:', err);
          // Reset the ref on error so it can be retried
          sentToTelegramRef.current = null;
          // Don't mark as sent in localStorage if there was an error
        });
      }
      
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
