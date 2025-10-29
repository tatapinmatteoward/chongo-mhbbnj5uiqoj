import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';

export default async function AboutPage() {
  const { frontmatter, content } = await getMarkdownContent('about.md');

  return (
    <div className="prose prose-lg mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
