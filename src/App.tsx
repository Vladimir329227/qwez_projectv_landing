import React, { useEffect, useMemo, useState, useContext } from 'react';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';
import QuizResult from './components/quiz-pages/quiz-results/QuizResult';
import ProductPage from './components/product-page/ProductPage';

type Page = 'landing' | 'quiz' | 'results' | 'product';

function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}

function setCookie(name: string, value: string, days: number) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Utility function to navigate to product page
export function navigateToProduct(productNameOrKey: string) {
  setCookie('page', 'product', 365);
  // Keep backward compatibility: productName remains for UI text
  setCookie('productName', productNameOrKey, 365);
  // New: also store normalized productKey used by registry
  setCookie('productKey', productNameOrKey.toUpperCase(), 365);
  window.location.reload();
}

// Utility function to navigate to results page
export function navigateToResults() {
  setCookie('page', 'results', 365);
  window.location.reload(); // Force page reload to trigger the new page
}

const PageContext = React.createContext<{ page: Page; setPage: (page: Page) => void } | undefined>(undefined);

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within App');
  return ctx;
}

function App() {
  const initialPage: Page = useMemo(() => {
    const fromCookie = getCookie('page');
    if (fromCookie === 'quiz') return 'quiz';
    if (fromCookie === 'results') return 'results';
    if (fromCookie === 'product') return 'product';
    return 'landing';
  }, []);

  const [page, setPage] = useState<Page>(initialPage);

  useEffect(() => {
    setCookie('page', page, 365);
  }, [page]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {page === 'quiz' ? (
        <QuizPage />
      ) : page === 'results' ? (
        <QuizResult answers={(() => {
          try {
            const raw = localStorage.getItem('quiz.answers');
            return raw ? JSON.parse(raw) : {};
          } catch {
            return {};
          }
        })()} />
      ) : page === 'product' ? (
        <ProductPage 
          productName={getCookie('productName') || 'Antiox'}
          productKey={getCookie('productKey')}
          answers={(() => {
            try {
              const raw = localStorage.getItem('quiz.answers');
              return raw ? JSON.parse(raw) : {};
            } catch {
              return {};
            }
          })()} 
        />
      ) : (
        <ResponsiveProjectV />
      )}
    </PageContext.Provider>
  );
}

export default App;