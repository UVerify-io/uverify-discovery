import { Link } from 'react-router';
import type { MetaFunction } from 'react-router';
import Logo from '../../assets/uverify.svg';
import Footer from '../../components/Footer';
import PostCard from '../../components/blog/PostCard';
import { getAllPosts } from '../../lib/blog.server';

export async function loader() {
  const posts = getAllPosts();
  return { posts };
}

type LoaderData = Awaited<ReturnType<typeof loader>>;

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const title = 'Blog | UVerify';
  const description =
    'Insights on blockchain document certification, Cardano, digital trust, and developer resources from the UVerify team.';
  const url = 'https://uverify.io/blog';
  const image = 'https://uverify.io/og-image.png';
  return [
    { title },
    { name: 'description', content: description },
    { tagName: 'link', rel: 'canonical', href: url },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:image', content: image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:image', content: image },
    {
      'script:ld+json': {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'UVerify Blog',
        url,
        description,
        publisher: {
          '@type': 'Organization',
          name: 'UVerify',
          url: 'https://uverify.io',
        },
        blogPost: (data?.posts ?? []).map((p) => ({
          '@type': 'BlogPosting',
          headline: p.frontmatter.title,
          url: `https://uverify.io/blog/${p.slug}`,
          datePublished: p.frontmatter.publishedAt,
        })),
      },
    },
  ];
};

export default function BlogIndex({
  loaderData,
}: {
  loaderData: LoaderData;
}) {
  const { posts } = loaderData;

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
        <h1 className="text-4xl font-bold mb-2 text-white">Blog</h1>
        <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-4" />
        <p className="text-white/70 mb-10">
          Insights on blockchain document certification, Cardano, digital trust,
          and developer resources from the UVerify team.
        </p>

        {posts.length === 0 ? (
          <p className="text-white/50">No posts yet — check back soon.</p>
        ) : (
          <ul className="space-y-6" role="list">
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="pb-10 text-white/55">
        <Footer />
      </div>
    </div>
  );
}
