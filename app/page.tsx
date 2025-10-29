import { getMarkdownContent } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';

export default async function HomePage() {
  const { frontmatter, content } = await getMarkdownContent('home.md');

  return (
    <div className="prose prose-lg mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
