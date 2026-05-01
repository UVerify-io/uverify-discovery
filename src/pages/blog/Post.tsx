import { data, Link } from 'react-router';
import type { MetaFunction, LoaderFunctionArgs } from 'react-router';
import { useRef } from 'react';
import Logo from '../../assets/uverify.svg';
import Footer from '../../components/Footer';
import PostMeta from '../../components/blog/PostMeta';
import Prose from '../../components/blog/Prose';
import CodeCopy from '../../components/blog/CodeCopy';
import { getAllPosts, getPost } from '../../lib/blog.server';
import { formatDate } from '../../lib/format';
import { markdownToHtml } from '../../lib/markdown.server';

export async function loader({ params }: LoaderFunctionArgs) {
  const slug = params['slug'] ?? '';
  const post = getPost(slug);

  if (!post || post.frontmatter.draft) {
    throw data(null, { status: 404 });
  }

  const html = await markdownToHtml(post.rawContent);
  const allPosts = getAllPosts();
  const idx = allPosts.findIndex((p) => p.slug === slug);
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const next = idx > 0 ? allPosts[idx - 1] : null;

  return {
    slug: post.slug,
    frontmatter: post.frontmatter,
    readingTime: post.readingTime,
    publishedFormatted: formatDate(post.frontmatter.publishedAt),
    updatedFormatted: post.frontmatter.updatedAt
      ? formatDate(post.frontmatter.updatedAt)
      : null,
    html,
    prev: prev ? { slug: prev.slug, title: prev.frontmatter.title } : null,
    next: next ? { slug: next.slug, title: next.frontmatter.title } : null,
  };
}

type LoaderData = Awaited<ReturnType<typeof loader>>;

export const meta: MetaFunction<typeof loader> = ({ data: loaderData }) => {
  if (!loaderData) return [{ title: 'Post not found | UVerify Blog' }];

  const { frontmatter, slug } = loaderData;
  const canonical =
    frontmatter.canonical ?? `https://uverify.io/blog/${slug}`;
  const image =
    frontmatter.ogImage
      ? frontmatter.ogImage.startsWith('http')
        ? frontmatter.ogImage
        : `https://uverify.io${frontmatter.ogImage}`
      : 'https://uverify.io/og-image.png';
  const title = `${frontmatter.title} | UVerify Blog`;

  return [
    { title },
    { name: 'description', content: frontmatter.description },
    { tagName: 'link', rel: 'canonical', href: canonical },
    { property: 'og:title', content: frontmatter.title },
    { property: 'og:description', content: frontmatter.description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: canonical },
    { property: 'og:type', content: 'article' },
    {
      property: 'article:published_time',
      content: frontmatter.publishedAt,
    },
    { property: 'article:author', content: 'Fabian Bormann' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: frontmatter.title },
    { name: 'twitter:description', content: frontmatter.description },
    { name: 'twitter:image', content: image },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: frontmatter.title,
        description: frontmatter.description,
        image,
        url: canonical,
        datePublished: frontmatter.publishedAt,
        dateModified: frontmatter.updatedAt ?? frontmatter.publishedAt,
        author: {
          '@type': 'Person',
          name: 'Fabian Bormann',
          url: 'https://uverify.io',
        },
        publisher: {
          '@type': 'Organization',
          name: 'UVerify',
          url: 'https://uverify.io',
          logo: { '@type': 'ImageObject', url: 'https://uverify.io/uverify.png' },
        },
        keywords: (frontmatter.tags ?? []).join(', '),
      },
    },
  ];
};

export default function BlogPost({ loaderData }: { loaderData: LoaderData }) {
  const {
    frontmatter,
    readingTime,
    publishedFormatted,
    updatedFormatted,
    html,
    prev,
    next,
  } = loaderData;

  const proseRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-main-gradient text-white">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-4 h-16 backdrop-blur-md">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={Logo}
            alt="UVerify Logo"
            className="w-8 h-8 transition-[filter] duration-300 group-hover:animate-logo-glow"
          />
          <p className="font-bold text-sm text-white uppercase tracking-wide group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)] transition-[filter] duration-300">
            UVerify
          </p>
        </Link>
        <a
          href="https://app.uverify.io"
          className="flex items-center gap-1.5 border border-cyan-400/40 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/30 px-3 py-1.5 text-sm font-medium text-white/90 transition-all duration-200"
        >
          Launch App
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 pt-28 pb-16">
        {/* Back */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-white/55 hover:text-white/90 transition-colors mb-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded"
        >
          <svg
            className="w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
          Back to blog
        </Link>

        {/* Hero */}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
            {frontmatter.title}
          </h1>
          <p className="text-lg text-white/70 mb-6">{frontmatter.description}</p>
          <PostMeta
            publishedFormatted={publishedFormatted}
            publishedAt={frontmatter.publishedAt}
            updatedFormatted={updatedFormatted}
            updatedAt={frontmatter.updatedAt}
            readingTime={readingTime}
            tags={frontmatter.tags ?? []}
          />
        </header>

        <div className="h-px bg-gradient-to-r from-cyan-400/40 to-transparent mb-10" />

        {/* Body */}
        <Prose ref={proseRef} html={html} />
        <CodeCopy containerRef={proseRef} />

        <div className="h-px bg-white/10 mt-12 mb-8" />

        {/* Prev / Next */}
        <nav
          aria-label="Post navigation"
          className="flex flex-col sm:flex-row gap-4"
        >
          {prev && (
            <Link
              to={`/blog/${prev.slug}`}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="text-xs text-white/45 uppercase tracking-wide">
                ← Older
              </span>
              <p className="mt-1 text-sm text-white/80 font-medium line-clamp-2">
                {prev.title}
              </p>
            </Link>
          )}
          {next && (
            <Link
              to={`/blog/${next.slug}`}
              className="flex-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 text-right transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="text-xs text-white/45 uppercase tracking-wide">
                Newer →
              </span>
              <p className="mt-1 text-sm text-white/80 font-medium line-clamp-2">
                {next.title}
              </p>
            </Link>
          )}
        </nav>
      </div>

      <div className="pb-10 text-white/55">
        <Footer />
      </div>
    </div>
  );
}
