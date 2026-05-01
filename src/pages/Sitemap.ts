import { getAllPosts } from '../lib/blog.server';

const BASE = 'https://uverify.io';

interface SitemapEntry {
  loc: string;
  lastmod?: string;
  changefreq: string;
  priority: string;
}

export async function loader() {
  const posts = getAllPosts();

  const staticPages: SitemapEntry[] = [
    { loc: '/', changefreq: 'weekly', priority: '1.0' },
    { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
    { loc: '/terms-of-use', changefreq: 'monthly', priority: '0.3' },
    { loc: '/privacy-policy', changefreq: 'monthly', priority: '0.3' },
  ];

  const blogPages: SitemapEntry[] = posts.map((post) => ({
    loc: `/blog/${post.slug}`,
    lastmod: (post.frontmatter.updatedAt ?? post.frontmatter.publishedAt).split(
      'T',
    )[0],
    changefreq: 'monthly',
    priority: '0.7',
  }));

  const allEntries = [...staticPages, ...blogPages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (e) => `  <url>
    <loc>${BASE}${e.loc}</loc>${e.lastmod ? `\n    <lastmod>${e.lastmod}</lastmod>` : ''}
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
