import Markdown from 'react-markdown'
import '../content.css'

interface ContentProps {
  content: string | null
}

export default function Content({ content }: ContentProps) {
  return (
    <div id="content" className="flex-grow">
      <div className="card bg-transparent max-w-prose mt-4 mx-auto">
        <div className="content">
          <Markdown>{content}</Markdown>
        </div>
      </div>
    </div>
  )
}