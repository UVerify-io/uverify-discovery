import { Link } from 'react-router';
import { formatDate } from '../lib/format';

export interface TeaserPost {
  slug: string;
  title: string;
  description: string;
  cover: string | null;
  publishedAt: string;
  readingTime: number;
}

export default function BlogTeaser({ posts }: { posts: TeaserPost[] }) {
  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 flex flex-col items-center py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-center h-xs:text-xl h-xs:mb-1">
        Latest from the Blog
      </h1>
      <p className="text-white/50 text-sm mb-10 text-center h-xs:mb-4">
        Deep dives, tutorials, and product stories from the UVerify team
      </p>

      <div className="grid gap-6 md:grid-cols-3 w-full mb-10">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl overflow-hidden transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            {post.cover && (
              <img
                src={post.cover}
                alt=""
                loading="lazy"
                className="w-full aspect-[1000/420] object-cover"
              />
            )}
            <div className="p-5">
              <h2 className="text-base font-semibold text-white mb-2 leading-snug line-clamp-2">
                {post.title}
              </h2>
              <p className="text-sm text-white/65 mb-3 line-clamp-2">
                {post.description}
              </p>
              <div className="text-xs text-white/45">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span aria-hidden="true"> · </span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Link
        to="/blog"
        className="border border-white/25 rounded-xl bg-white/10 hover:bg-white/20 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-200"
      >
        View all posts →
      </Link>
    </div>
  );
}
