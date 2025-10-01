import React, { useEffect, useMemo, useState, useContext } from 'react';
import ResponsiveProjectV from './pages/ResponsiveProjectV';
import QuizPage from './components/quiz-pages/QuizPage';

type Page = 'landing' | 'quiz';

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

const PageContext = React.createContext<{ page: Page; setPage: (page: Page) => void } | undefined>(undefined);

export function usePage() {
  const ctx = useContext(PageContext);
  if (!ctx) throw new Error('usePage must be used within App');
  return ctx;
}

function App() {
  const initialPage: Page = useMemo(() => {
    const fromCookie = getCookie('page');
    return fromCookie === 'quiz' ? 'quiz' : 'landing';
  }, []);

  const [page, setPage] = useState<Page>(initialPage);

  useEffect(() => {
    setCookie('page', page, 365);
  }, [page]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {page === 'quiz' ? <QuizPage /> : <ResponsiveProjectV />}
    </PageContext.Provider>
  );
}

export default App;