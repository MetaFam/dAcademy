import { createLazyFileRoute, Link} from '@tanstack/react-router'
import Carousel from 'react-multi-carousel'
import CarouselItem, { toSlug } from '#components/CarouselItem'
import 'react-multi-carousel/lib/styles.css'
import { responsive } from '#carousel.config.ts'
import playbooks from '#playbooks.json'
import SectionHeader from '#components/SectionHeader'
import '#App.css'
import Top from '#components/Top.tsx'


export const Route = createLazyFileRoute('/org/$id/')({
  component: App,
})

export type Book = {
  title: string
  image: string
  alt?: string
  displayTitle?: boolean
}
export type Category = {
  title: string
  description: string
  books: Array<Book>
}
interface CarouselSectionProps {
  id: string
  title: string
  description: string
  items: Array<Book>
}

const CarouselSection = ({
  id,
  title,
  description,
  items,
}: CarouselSectionProps) => (
  <div {...{ id }} className="container py-4 mt-30 gap-4 scroll-mt-20">
    <SectionHeader {...{ title, description }} />
    <Carousel {...{ responsive }} className="gap-4 md:gap-6 lg:gap-8 w-full">
      {items.map((item, index) => (
        <div id={`${id}-${toSlug(item.title)}`} key={index}>
          <CarouselItem {...item} />
        </div>
      ))}
    </Carousel>
  </div>
)

export function App() {
  return (
    <>
      <div id="top" className="scroll-mt-32 flex items-center justify-center mt-2">
        <h2 className="text-accent font-light text-3xl mr-4">
            MetaGame Bookshelf :
        </h2>
        <div className="dropdown dropdown-hover mt-2">
          <div tabIndex={0} role="button" className="btn m-1">Categories</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            {playbooks.map((category, index) => (
              <li key={index}>
                <Link to={`/org/metagame/#${toSlug(category.title)}`}>
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container p-4 mt-30 gap-4">
        {playbooks.map((category, index) => (
          <CarouselSection
            key={index}
            id={toSlug(category.title)}
            title={category.title}
            description={category.description}
            items={category.books}
          />
        ))}
      </div>
      <Top/>
    </>
  )
}

export default App
