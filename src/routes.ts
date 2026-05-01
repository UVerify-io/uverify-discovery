import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('./App.tsx'),
  route('terms-of-use', './pages/TermsOfUse.tsx'),
  route('privacy-policy', './pages/PrivacyPolicy.tsx'),
  route('blog', './pages/blog/Index.tsx'),
  route('blog/rss.xml', './pages/blog/Rss.ts'),
  route('blog/:slug', './pages/blog/Post.tsx'),
  route('sitemap.xml', './pages/Sitemap.ts'),
] satisfies RouteConfig;
