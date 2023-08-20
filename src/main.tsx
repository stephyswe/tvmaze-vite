import React from 'react';
import ReactDOM from 'react-dom/client';

// default css
import './assets/index.css';
import './assets/normalize.css';
import './assets/shimmer-effect.css';

import App from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
