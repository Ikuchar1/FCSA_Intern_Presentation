import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Only handle route changes, not modal/dialog state changes
    if (hash) {
      // Handle hash anchors (e.g., /reflection#we-are-statements)
      // Use requestAnimationFrame to ensure the page has rendered
      requestAnimationFrame(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        } else {
          // Fallback to scrolling to top if hash element doesn't exist
          window.scrollTo({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
          });
        }
      });
    } else {
      // No hash - scroll to top on route change
      window.scrollTo({ 
        top: 0, 
        left: 0, 
        behavior: 'smooth' 
      });
      
      // Set focus to main content for accessibility
      // Use a small timeout to ensure smooth scroll has started
      setTimeout(() => {
        const mainElement = document.querySelector('main');
        if (mainElement) {
          mainElement.focus();
        }
      }, 100);
    }
  }, [pathname, hash]);

  // This component renders nothing
  return null;
};

export default ScrollToTop;