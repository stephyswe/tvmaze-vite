import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import AppRouter from './app';

const root = ReactDOM.createRoot(document.getElementById('root')!);

// Setup MSW mock server in development

if (process.env.NODE_ENV === 'development') {
  // Certify MSW's Service Worker is available before start React app.
  root.render(
    <BrowserRouter>
      Dev Env
      <AppRouter />
    </BrowserRouter>,
  );
  // Never setup MSW mock server in production
} else if (process.env.NODE_ENV === 'test') {
  // Certify MSW's Service Worker is available before start React app.
  import('../mocks/browser')
    .then(({ worker }) => {
      worker.start();
    }) // Run <App /> when Service Worker is ready to intercept requests.
    .then(() => {
      root.render(
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>,
      );
    });
  // Never setup MSW mock server in production
} else if (process.env.NODE_ENV === 'production') {
  root.render(<AppRouter />);
}
