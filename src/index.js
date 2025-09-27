import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PortfolioProvider } from './components/Context/PortfolioContext';
import { BrowserRouter } from 'react-router-dom'; // ✅
import { ContactProvider } from './components/Context/Contact.jsx';

// تجاهل تحذيرات React Router Future Flag أثناء التطوير
if (process.env.NODE_ENV === 'development') {
  const originalWarn = console.warn;
  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('React Router Future Flag Warning')
    ) {
      return;
    }
    originalWarn(...args);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <PortfolioProvider>
      <ContactProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ContactProvider>
    </PortfolioProvider>
  </React.StrictMode>
);

reportWebVitals();
