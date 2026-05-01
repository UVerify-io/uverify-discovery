import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./App.tsx'),
  route('terms-of-use', './pages/TermsOfUse.tsx'),
  route('privacy-policy', './pages/PrivacyPolicy.tsx'),
] satisfies RouteConfig;
