import Markdown from 'react-markdown'
import '../content.css'

interface ContentProps {
  content: string
}

export default function Content({ content }: ContentProps) {
  console.log({content})
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