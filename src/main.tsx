import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// A little something for the curious who open DevTools.
console.log(
  "%cHey, fellow engineer 👋\n%cLike poking around? Let's talk: https://telegram.me/IgorSavin",
  'color:#64ffda;font-size:14px;font-weight:bold;',
  'color:#8b949e;font-size:12px;',
);
