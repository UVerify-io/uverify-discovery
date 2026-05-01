import { z } from 'zod/v4';
export { formatDate } from './format';

function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, unknown> = {};
  const lines = match[1].split('\n');
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const colon = line.indexOf(':');
    if (colon === -1 || line.startsWith('#')) { i++; continue; }

    const key = line.slice(0, colon).trim();
    const rest = line.slice(colon + 1).trim();

    if (rest === '') {
      const items: string[] = [];
      i++;
      while (i < lines.length && lines[i].trimStart().startsWith('-')) {
        items.push(lines[i].trim().slice(1).trim().replace(/^['"]|['"]$/g, ''));
        i++;
      }
      data[key] = items;
      continue;
    }

    if (rest === 'true') data[key] = true;
    else if (rest === 'false') data[key] = false;
    else data[key] = rest.replace(/^['"]|['"]$/g, '');
    i++;
  }

  return { data, content: match[2] };
}

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
  const { data, content } = parseFrontmatter(raw);

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
