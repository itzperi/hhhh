import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Guard against third-party extension errors trying to modify window.fetch
if (typeof window !== 'undefined') {
  const handleExtError = (e: ErrorEvent) => {
    if (
      (e.filename && e.filename.includes('chrome-extension://')) ||
      (e.message && e.message.includes('fetch') && e.message.includes('getter'))
    ) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  };
  window.addEventListener('error', handleExtError, true);
}

createRoot(document.getElementById('root')!).render(<App />);
