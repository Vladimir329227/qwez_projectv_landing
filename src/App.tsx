import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<ResponsiveProjectV />} />
			<Route path="/landing" element={<ResponsiveProjectV />} />
			<Route path="/quiz" element={<QuizPage />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;