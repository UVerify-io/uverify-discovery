import { Link } from 'react-router';
import type { Post } from '../../lib/blog.server';
import { formatDate } from '../../lib/format';

export default function PostCard({ post }: { post: Post }) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <Link
      to={`/blog/${slug}`}
      className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      <h2 className="text-lg font-semibold text-white mb-2 leading-snug">
        {frontmatter.title}
      </h2>
      <p className="text-sm text-white/65 mb-4 line-clamp-2">
        {frontmatter.description}
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-white/45">
        <time dateTime={frontmatter.publishedAt}>
          {formatDate(frontmatter.publishedAt)}
        </time>
        <span aria-hidden="true">·</span>
        <span>{readingTime} min read</span>
        {(frontmatter.tags ?? []).length > 0 && (
          <>
            <span aria-hidden="true">·</span>
            <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Tags">
              {(frontmatter.tags ?? []).map((tag) => (
                <li
                  key={tag}
                  className="bg-cyan-500/15 border border-cyan-400/20 text-cyan-300/80 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </Link>
  );
}
