import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
function App() {
  return (
    <BrowserRouter>
        <Routes>
			<Route path="/" element={<ResponsiveProjectV />} />
			<Route path="/ProjectVDesktopV1 " element={<ResponsiveProjectV />} />
        </Routes>
    </BrowserRouter>
  );
}
export default App;