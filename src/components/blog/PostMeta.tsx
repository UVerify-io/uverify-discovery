interface PostMetaProps {
  publishedFormatted: string;
  publishedAt: string;
  updatedFormatted: string | null;
  updatedAt: string | undefined;
  readingTime: number;
  tags: string[];
}

export default function PostMeta({
  publishedFormatted,
  publishedAt,
  updatedFormatted,
  updatedAt,
  readingTime,
  tags,
}: PostMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/50">
      <time dateTime={publishedAt}>{publishedFormatted}</time>
      {updatedFormatted && updatedAt && (
        <>
          <span aria-hidden="true">·</span>
          <span>
            Updated <time dateTime={updatedAt}>{updatedFormatted}</time>
          </span>
        </>
      )}
      <span aria-hidden="true">·</span>
      <span>{readingTime} min read</span>
      {tags.length > 0 && (
        <>
          <span aria-hidden="true">·</span>
          <ul className="flex flex-wrap gap-1.5" role="list" aria-label="Tags">
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-cyan-500/15 border border-cyan-400/20 text-cyan-300/80 px-2.5 py-0.5 rounded-full text-xs"
              >
                {tag}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
