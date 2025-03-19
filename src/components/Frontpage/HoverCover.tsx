import { toHTTP } from '@/lib/utils'
import Markdown from 'react-markdown'

export function HoverCover({name, cover, description, className = ''}: {name:string, cover:string, description:string, className?:string}) {
  return (
    <figure className={`relative w-fit ${className}`}>
      <img src={toHTTP(cover)} className="max-h-60 relative"/>
      <figcaption className="absolute inset-0 flex flex-col justify-center items-center z-20 text-xl font-bold">
        <h2 className="text-center bg-white/30 text-white px-2 py-1 rounded-md">{name}</h2>
        <section className="description">
          <Markdown>{description}</Markdown>
        </section>
      </figcaption>
    </figure>
  )
}
