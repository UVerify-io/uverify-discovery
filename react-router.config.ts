import type { Config } from '@react-router/dev/config';

export default {
  appDirectory: 'src',
  buildDirectory: 'dist',
  prerender: ['/', '/terms-of-use', '/privacy-policy'],
} satisfies Config;
