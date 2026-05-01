import { getAllPosts } from '../../lib/blog.server';
import { markdownToHtml } from '../../lib/markdown.server';

const BASE = 'https://uverify.io';

export async function loader() {
  const posts = getAllPosts();

  const items = await Promise.all(
    posts.map(async (post) => {
      const html = await markdownToHtml(post.rawContent);
      const link = `${BASE}/blog/${post.slug}`;
      return `    <item>
      <title><![CDATA[${post.frontmatter.title}]]></title>
      <link>${link}</link>
      <description><![CDATA[${post.frontmatter.description}]]></description>
      <pubDate>${new Date(post.frontmatter.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${link}</guid>
      <content:encoded><![CDATA[${html}]]></content:encoded>
    </item>`;
    }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>UVerify Blog</title>
    <link>${BASE}/blog</link>
    <description>Blockchain document certification insights from the UVerify team.</description>
    <language>en</language>
    <atom:link href="${BASE}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
