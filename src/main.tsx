import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TermsOfUse from './pages/TermsOfUse.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/terms-of-use',
    element: <TermsOfUse />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
