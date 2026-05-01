import matter from 'gray-matter';
import { z } from 'zod/v4';
export { formatDate } from './format';

const markdownFiles = import.meta.glob<string>('/content/blog/*.md', {
  eager: true,
  as: 'raw',
});

const dateString = z
  .string()
  .refine((s) => !isNaN(Date.parse(s)), { message: 'Invalid date string' });

const FrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  publishedAt: dateString,
  updatedAt: dateString.optional(),
  slug: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  ogImage: z.string().optional(),
  canonical: z.string().optional(),
  draft: z.boolean().optional().default(false),
});

export type PostFrontmatter = z.infer<typeof FrontmatterSchema>;

export interface Post {
  slug: string;
  frontmatter: PostFrontmatter;
  rawContent: string;
  readingTime: number;
}

function calcReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}

function parsePost(filePath: string, raw: string): Post {
  const filename = filePath.split('/').pop() ?? '';
  const { data, content } = matter(raw);

  const result = FrontmatterSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${filename}:\n${JSON.stringify(result.error.issues, null, 2)}`,
    );
  }

  const fm = result.data;
  return {
    slug: fm.slug ?? filename.replace(/\.md$/, ''),
    frontmatter: fm,
    rawContent: content,
    readingTime: calcReadingTime(content),
  };
}

const allParsedPosts: Post[] = Object.entries(markdownFiles)
  .map(([path, raw]) => parsePost(path, raw))
  .sort(
    (a, b) =>
      new Date(b.frontmatter.publishedAt).getTime() -
      new Date(a.frontmatter.publishedAt).getTime(),
  );

export function getAllPosts(includeDrafts = false): Post[] {
  return allParsedPosts.filter((p) => includeDrafts || !p.frontmatter.draft);
}

export function getPost(slug: string): Post | null {
  return allParsedPosts.find((p) => p.slug === slug) ?? null;
}
