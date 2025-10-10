import React, { useState } from 'react';
import { ProjectVRecommendationEngine } from './quiz-pages/quiz-results/recommendationEngine';

export default function TestRecommendationEngine() {
  const [testResults, setTestResults] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const runTests = () => {
    setIsRunning(true);
    setTestResults([]);
    
    const engine = new ProjectVRecommendationEngine();
    const results: string[] = [];

    // Test case 1: High stress user
    const testCase1 = {
      gender: "female",
      age: 35,
      goals: ["less-stress", "better-sleep"],
      climate: "urban-polluted",
      activity: "no",
      morningEnergy: "dragged",
      energyLevel: "low-energy",
      caffeineIntake: "more-4-cups",
      focusLevel: "where-am",
      sleepQuality: "insomnia",
      stressLevel: "always-on",
      stressManagement: "chocolate-chaos",
      "self-care": "not-really",
      "skin-saying": "dull"
    };

    try {
      const result1 = engine.getRecommendations(testCase1);
      results.push(`✅ Test 1 (High Stress): ${result1.effectiveness_score}% effectiveness`);
      results.push(`   Products: ${result1.recommended_products.map(p => p.product_name).join(', ')}`);
      results.push(`   Benefits: ${result1.key_benefits.join(', ')}`);
    } catch (error) {
      results.push(`❌ Test 1 Error: ${error}`);
    }

    // Test case 2: Healthy user
    const testCase2 = {
      gender: "male",
      age: 28,
      goals: ["healthy-heart", "sharper-focus"],
      climate: "rural-nature",
      activity: "no",
      morningEnergy: "bright-eyed",
      energyLevel: "energized-unstoppable",
      caffeineIntake: "dont-drink",
      focusLevel: "laser-sharp",
      sleepQuality: "like-royalty",
      stressLevel: "breathe-space",
      stressManagement: "zen-rituals",
      "self-care": "weekly-luxe-rituals",
      "skin-saying": "glowing"
    };

    try {
      const result2 = engine.getRecommendations(testCase2);
      results.push(`✅ Test 2 (Healthy): ${result2.effectiveness_score}% effectiveness`);
      results.push(`   Products: ${result2.recommended_products.map(p => p.product_name).join(', ')}`);
      results.push(`   Benefits: ${result2.key_benefits.join(', ')}`);
    } catch (error) {
      results.push(`❌ Test 2 Error: ${error}`);
    }

    // Test case 3: Empty answers
    try {
      const result3 = engine.getRecommendations({});
      results.push(`❌ Test 3 (Empty): Should have failed but got ${result3.effectiveness_score}%`);
    } catch (error) {
      results.push(`✅ Test 3 (Empty): Correctly failed with error: ${error}`);
    }

    setTestResults(results);
    setIsRunning(false);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recommendation Engine Test</h1>
      
      <button
        onClick={runTests}
        disabled={isRunning}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 disabled:opacity-50"
      >
        {isRunning ? 'Running Tests...' : 'Run Tests'}
      </button>

      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Test Results:</h2>
        {testResults.length === 0 ? (
          <p className="text-gray-500">Click "Run Tests" to see results</p>
        ) : (
          <div className="space-y-1">
            {testResults.map((result, index) => (
              <div key={index} className="font-mono text-sm">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
