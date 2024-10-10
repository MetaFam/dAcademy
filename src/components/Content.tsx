import Markdown from 'react-markdown'
import '../content.css'
import { useBook } from '../BookContext'

export default function Content({ slug }: { slug: string }) {
  const { book: { chapters: { current } = {} } = {} } = useBook(slug)

  return (
    <div id="content" className="flex-grow">
      <div className="card bg-transparent max-w-prose mt-4 mx-auto">
        <div className="content">
          <Markdown>{current?.content}</Markdown>
        </div>
      </div>
    </div>
  )
}