// Navigation utilities for browser history support

export type Page = 'landing' | 'quiz' | 'results' | 'product' | 'test';

// URL path mapping for different pages
const PAGE_PATHS: Record<Page, string> = {
  landing: '/',
  quiz: '/quiz',
  results: '/results',
  product: '/product',
  test: '/test'
};

// Reverse mapping from path to page
const PATH_TO_PAGE: Record<string, Page> = {
  '/': 'landing',
  '/quiz': 'quiz',
  '/results': 'results',
  '/product': 'product',
  '/test': 'test'
};

/**
 * Get current page from URL path
 */
export function getPageFromPath(): Page {
  const path = window.location.pathname;
  return PATH_TO_PAGE[path] || 'landing';
}

/**
 * Navigate to a page using browser history API
 */
export function navigateToPage(page: Page, replace: boolean = false): void {
  const path = PAGE_PATHS[page];
  
  if (replace) {
    window.history.replaceState({ page }, '', path);
  } else {
    window.history.pushState({ page }, '', path);
  }
  
  // Dispatch custom event to notify components about page change
  window.dispatchEvent(new CustomEvent('pagechange', { detail: { page } }));
}

/**
 * Initialize browser history support
 */
export function initializeBrowserHistory(
  onPageChange: (page: Page) => void
): () => void {
  // Handle browser back/forward buttons
  const handlePopState = (event: PopStateEvent) => {
    const page = event.state?.page || getPageFromPath();
    onPageChange(page);
  };

  // Handle custom page change events
  const handlePageChange = (event: CustomEvent) => {
    onPageChange(event.detail.page);
  };

  // Add event listeners
  window.addEventListener('popstate', handlePopState);
  window.addEventListener('pagechange', handlePageChange as EventListener);

  // Initialize current page in history state
  const currentPage = getPageFromPath();
  if (!window.history.state?.page) {
    window.history.replaceState({ page: currentPage }, '', window.location.pathname);
  }

  // Return cleanup function
  return () => {
    window.removeEventListener('popstate', handlePopState);
    window.removeEventListener('pagechange', handlePageChange as EventListener);
  };
}

/**
 * Check if browser history is supported
 */
export function isHistorySupported(): boolean {
  return typeof window !== 'undefined' && 
         'history' in window && 
         'pushState' in window.history;
}
