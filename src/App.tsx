import React, { useEffect, useMemo, useState, useContext } from 'react';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';
import QuizResult from './components/quiz-pages/quiz-results/QuizResult';
import ProductModal from './components/product-page/ProductModal';

type Page = 'landing' | 'quiz' | 'results' | 'product' | 'test';

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
  const currentPage = getCookie('page');
  if (currentPage !== 'product') {
    setCookie('lastPage', currentPage || 'landing', 365);
  }
  setCookie('page', 'product', 365);
  // Keep backward compatibility: productName remains for UI text
  setCookie('productName', productNameOrKey, 365);
  // New: also store normalized productKey used by registry
  setCookie('productKey', productNameOrKey.toUpperCase(), 365);
  window.location.reload();
}

// Utility function to open product modal
export function openProductModal(productNameOrKey: string) {
  setCookie('productName', productNameOrKey, 365);
  setCookie('productKey', productNameOrKey.toUpperCase(), 365);
  setCookie('showProductModal', 'true', 365);
  // Ensure we stay on results page
  setCookie('page', 'results', 365);
  // Force a small delay to ensure cookies are set, then reload
  setTimeout(() => {
    window.location.reload();
  }, 50);
}

// Utility function to close product modal
export function closeProductModal() {
  setCookie('showProductModal', 'false', 365);
  // Force a small delay to ensure cookies are set, then reload
  setTimeout(() => {
    window.location.reload();
  }, 10);
}


export function navigateToLastPage() {
  const lastPage = getCookie('lastPage') as Page | undefined;
    if (lastPage) {
      setCookie('page', lastPage, 365);
    } else {
      setCookie('page', 'landing', 365);
    }
    window.location.reload();
}

// Utility function to navigate to results page
export function navigateToResults() {
  setCookie('page', 'results', 365);
  window.location.reload(); // Force page reload to trigger the new page
}

// Utility function to navigate to landing page
export function navigateToLanding() {
  setCookie('page', 'landing', 365);
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
    if (fromCookie === 'test') return 'test';
    return 'landing';
  }, []);

  const [page, setPage] = useState<Page>(initialPage);
  const [showProductModal, setShowProductModal] = useState<boolean>(() => {
    return getCookie('showProductModal') === 'true';
  });

  useEffect(() => {
    setCookie('page', page, 365);
  }, [page]);

  useEffect(() => {
    const modalState = getCookie('showProductModal') === 'true';
    setShowProductModal(modalState);
  }, []);

  const handleCloseProductModal = () => {
    setShowProductModal(false);
    setCookie('showProductModal', 'false', 365);
  };

  const handleOpenProductModal = (productNameOrKey: string) => {
    setCookie('productName', productNameOrKey, 365);
    setCookie('productKey', productNameOrKey.toUpperCase(), 365);
    setShowProductModal(true);
    setCookie('showProductModal', 'true', 365);
  };

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {page === 'quiz' ? (
        <QuizPage />
      ) : page === 'results' ? (
        <>
          <QuizResult answers={(() => {
            try {
              const raw = localStorage.getItem('quiz.answers');
              return raw ? JSON.parse(raw) : {};
            } catch {
              return {};
            }
          })()} />
          <ProductModal
            isOpen={showProductModal}
            onClose={handleCloseProductModal}
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
        </>
      ) : page === 'product' ? (
        <ProductModal
          isOpen={true}
          onClose={() => {
            setPage('results');
            setCookie('showProductModal', 'false', 365);
          }}
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