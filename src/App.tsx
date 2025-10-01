import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';
function App() {
  return (
    <HashRouter>
        <Routes>
			<Route path="/" element={<ResponsiveProjectV />} />
			<Route path="/landing" element={<ResponsiveProjectV />} />
			<Route path="/quiz" element={<QuizPage />} />
        </Routes>
    </HashRouter>
  );
}
export default App;