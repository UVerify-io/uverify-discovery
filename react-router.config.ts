import type { Config } from '@react-router/dev/config';
import fs from 'node:fs';
import path from 'node:path';

function getNonDraftBlogSlugs(): string[] {
  const blogDir = path.resolve('content/blog');
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((f: string) => f.endsWith('.md'))
    .filter((f: string) => {
      const content = fs.readFileSync(path.join(blogDir, f), 'utf-8');
      const frontmatterBlock = content.match(/^---\n([\s\S]*?)\n---/);
      if (!frontmatterBlock) return true;
      return !/^\s*draft:\s*true\s*$/m.test(frontmatterBlock[1]);
    })
    .map((f: string) => {
      // honour explicit slug: field if present
      const content = fs.readFileSync(path.join(blogDir, f), 'utf-8');
      const slugMatch = content.match(/^slug:\s*(.+)$/m);
      return slugMatch ? slugMatch[1].trim() : f.replace(/\.md$/, '');
    });
}

export default {
  appDirectory: 'src',
  buildDirectory: 'dist',
  prerender: async () => {
    const blogSlugs = getNonDraftBlogSlugs();
    return [
      '/',
      '/terms-of-use',
      '/privacy-policy',
      '/blog',
      ...blogSlugs.map((s) => `/blog/${s}`),
      '/blog/rss.xml',
      '/sitemap.xml',
    ];
  },
} satisfies Config;
