import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod/v4';
export { formatDate } from './format';

const BLOG_DIR = path.resolve('content/blog');

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

function loadPost(file: string): Post {
  const filePath = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  const result = FrontmatterSchema.safeParse(data);
  if (!result.success) {
    throw new Error(
      `Invalid frontmatter in ${file}:\n${JSON.stringify(result.error.issues, null, 2)}`,
    );
  }

  const fm = result.data;
  return {
    slug: fm.slug ?? file.replace(/\.md$/, ''),
    frontmatter: fm,
    rawContent: content,
    readingTime: calcReadingTime(content),
  };
}

export function getAllPosts(includeDrafts = false): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.md'))
    .map(loadPost)
    .filter((p) => includeDrafts || !p.frontmatter.draft)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime(),
    );
}

export function getPost(slug: string): Post | null {
  if (!fs.existsSync(BLOG_DIR)) return null;
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  for (const file of files) {
    const post = loadPost(file);
    if (post.slug === slug) return post;
  }
  return null;
}

