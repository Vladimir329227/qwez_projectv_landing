import React, { useEffect, useMemo, useState, useContext } from 'react';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';
import QuizResult from './components/quiz-pages/quiz-results/QuizResult';
import ProductModal from './components/product-page/ProductModal';
import QuizProgressModal from './components/QuizProgressModal';
import ConsentBanner from './components/ConsentBanner';
import { 
  Page, 
  navigateToPage, 
  initializeBrowserHistory, 
  isHistorySupported,
  getPageFromPath
} from './utils/navigationUtils';
import { initializeConsent } from './utils/consentUtils';


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
  
  if (isHistorySupported()) {
    navigateToPage('product');
  } else {
    window.location.reload();
  }
}

// Utility function to open product modal
export function openProductModal(productNameOrKey: string) {
  console.log('openProductModal called with:', productNameOrKey);
  setCookie('productName', productNameOrKey, 365);
  setCookie('productKey', productNameOrKey.toUpperCase(), 365);
  setCookie('showProductModal', 'true', 365);
  
  // Dispatch custom event to notify App component about modal state change
  window.dispatchEvent(new CustomEvent('productModalOpen', { 
    detail: { 
      productName: productNameOrKey, 
      productKey: productNameOrKey.toUpperCase() 
    } 
  }));
  console.log('productModalOpen event dispatched');
}

// Utility function to close product modal
export function closeProductModal() {
  setCookie('showProductModal', 'false', 365);
  
  // Dispatch custom event to notify App component about modal state change
  window.dispatchEvent(new CustomEvent('productModalClose'));
}


export function navigateToLastPage() {
  const lastPage = getCookie('lastPage') as Page | undefined;
  const targetPage = lastPage || 'landing';
  setCookie('page', targetPage, 365);
  
  if (isHistorySupported()) {
    navigateToPage(targetPage);
  } else {
    window.location.reload();
  }
}

// Utility function to navigate to results page
export function navigateToResults() {
  setCookie('page', 'results', 365);
  
  if (isHistorySupported()) {
    navigateToPage('results');
  } else {
    window.location.reload();
  }
}

// Utility function to navigate to landing page
export function navigateToLanding() {
  setCookie('page', 'landing', 365);
  
  if (isHistorySupported()) {
    navigateToPage('landing');
  } else {
    window.location.reload();
  }
}

const PageContext = React.createContext<{ 
  page: Page; 
  setPage: (page: Page) => void;
  showQuizProgressModalWithData: (data: {
    isCompleted: boolean;
    currentStep: number;
    totalSteps: number;
  }) => void;
} | undefined>(undefined);

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within App');
  return ctx;
}

function App() {
  // Always start with landing page
  const [page, setPage] = useState<Page>('landing');
  const [showProductModal, setShowProductModal] = useState<boolean>(false); // Always start with modal closed
  
  // Debug: log showProductModal changes
  useEffect(() => {
    console.log('showProductModal changed to:', showProductModal);
  }, [showProductModal]);
  const [startQuizFresh, setStartQuizFresh] = useState<boolean>(false);
  const [showQuizProgressModal, setShowQuizProgressModal] = useState<boolean>(false);
  const [quizProgressData, setQuizProgressData] = useState<{
    isCompleted: boolean;
    currentStep: number;
    totalSteps: number;
  } | null>(null);

  // Initialize consent mode on app load
  useEffect(() => {
    initializeConsent();
  }, []);

  // Initialize browser history support for manual navigation only
  useEffect(() => {
    if (isHistorySupported()) {
      const cleanup = initializeBrowserHistory((newPage: Page) => {
        // Only allow navigation within the same session
        // On page refresh, always redirect to landing
        if (window.performance.navigation.type === 1) { // TYPE_RELOAD
          setPage('landing');
          // Don't call navigateToPage here to avoid infinite loop
          window.history.replaceState({ page: 'landing' }, '', '/');
          // Reset product modal state on page reload
          setCookie('showProductModal', 'false', 365);
          setShowProductModal(false);
        } else {
          setPage(newPage);
          setCookie('page', newPage, 365);
          // Reset product modal state when navigating to landing
          if (newPage === 'landing') {
            setCookie('showProductModal', 'false', 365);
            setShowProductModal(false);
          }
        }
      });
      
      return cleanup;
    }
  }, []);

  // Redirect to landing if user tries to access quiz/results directly via URL
  useEffect(() => {
    if (isHistorySupported()) {
      const currentPath = window.location.pathname;
      if (currentPath === '/quiz' || currentPath === '/results') {
        navigateToPage('landing', true);
        setPage('landing');
        // Reset product modal state when redirecting to landing
        setCookie('showProductModal', 'false', 365);
        setShowProductModal(false);
      }
    }
  }, []);

  // Handle product modal events
  useEffect(() => {
    const handleProductModalOpen = (event: CustomEvent) => {
      console.log('handleProductModalOpen received:', event.detail);
      setShowProductModal(true);
      setCookie('productName', event.detail.productName, 365);
      setCookie('productKey', event.detail.productKey, 365);
      console.log('showProductModal set to true');
    };

    const handleProductModalClose = () => {
      console.log('handleProductModalClose received');
      setShowProductModal(false);
    };

    window.addEventListener('productModalOpen', handleProductModalOpen as EventListener);
    window.addEventListener('productModalClose', handleProductModalClose);

    return () => {
      window.removeEventListener('productModalOpen', handleProductModalOpen as EventListener);
      window.removeEventListener('productModalClose', handleProductModalClose);
    };
  }, []);

  useEffect(() => {
    setCookie('page', page, 365);
  }, [page]);

  const handleCloseProductModal = () => {
    setShowProductModal(false);
    setCookie('showProductModal', 'false', 365);
    closeProductModal(); // Use the utility function
  };

  const handleOpenProductModal = (productNameOrKey: string) => {
    setCookie('productName', productNameOrKey, 365);
    setCookie('productKey', productNameOrKey.toUpperCase(), 365);
    setShowProductModal(true);
    setCookie('showProductModal', 'true', 365);
    openProductModal(productNameOrKey); // Use the utility function
  };

  // Functions for quiz progress modal
  const handleStartQuizFresh = () => {
    setStartQuizFresh(true);
    setShowQuizProgressModal(false);
    setPage('quiz');
  };

  const handleContinueQuiz = () => {
    setStartQuizFresh(false);
    setShowQuizProgressModal(false);
    setPage('quiz');
  };

  const handleViewResults = () => {
    setShowQuizProgressModal(false);
    setPage('results');
  };

  const handleCloseQuizProgressModal = () => {
    setShowQuizProgressModal(false);
  };

  const showQuizProgressModalWithData = (data: {
    isCompleted: boolean;
    currentStep: number;
    totalSteps: number;
  }) => {
    setQuizProgressData(data);
    setShowQuizProgressModal(true);
  };

  return (
    <PageContext.Provider value={{ page, setPage, showQuizProgressModalWithData }}>
      {page === 'quiz' ? (
        <QuizPage startFresh={startQuizFresh} />
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
        <>
          <ResponsiveProjectV />
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
      )}
      
      {/* Quiz Progress Modal */}
      {quizProgressData && (
        <QuizProgressModal
          isOpen={showQuizProgressModal}
          onClose={handleCloseQuizProgressModal}
          onContinue={quizProgressData.isCompleted ? handleViewResults : handleContinueQuiz}
          onStartFresh={handleStartQuizFresh}
          isCompleted={quizProgressData.isCompleted}
          currentStep={quizProgressData.currentStep}
          totalSteps={quizProgressData.totalSteps}
        />
      )}

      {/* Consent Banner */}
      <ConsentBanner />
    </PageContext.Provider>
  );
}

export default App;

// Global functions for testing Telegram in browser console
// Usage: window.testTelegramConnection() or window.testTelegramSending()
declare global {
  interface Window {
    testTelegramConnection: () => Promise<void>;
    testTelegramSending: () => Promise<boolean>;
    resetTelegramSentStatus: () => void;
  }
}

// Make functions available globally for console testing
if (typeof window !== 'undefined') {
  // Import test functions dynamically to avoid circular dependencies
  import('./utils/telegramTest').then(({ testConnection, testTelegramSending, resetTelegramSentStatus }) => {
    window.testTelegramConnection = testConnection;
    window.testTelegramSending = testTelegramSending;
    window.resetTelegramSentStatus = resetTelegramSentStatus;
    
    console.log('🔧 Telegram test functions loaded!');
    console.log('Available commands:');
    console.log('• window.testTelegramConnection() - Test connection and get chat info');
    console.log('• window.testTelegramSending() - Test sending a message');
    console.log('• window.resetTelegramSentStatus() - Reset sent status (for testing)');
  });
}