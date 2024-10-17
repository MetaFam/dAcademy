import { createLazyFileRoute } from '@tanstack/react-router'
import Carousel from 'react-multi-carousel'
import { Link } from '@tanstack/react-router'
import playbooks from '../../../playbooks.json'
import SectionHeader from '../../../components/SectionHeader'
import CarouselItem, { toSlug } from '../../../components/CarouselItem'
import 'react-multi-carousel/lib/styles.css'
import '../../../App.css'

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

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
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
      <div id="top" className="scroll-mt-32">
        <h2 className="text-accent font-light text-3xl mb-2 pt-6">
          A de-store of knowledge. Onboard forward.
        </h2>
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
      <div className="fixed bottom-0 right-0 p-4">
        <Link to={'/#top' as '/'} className="btn btn-ghost text-xl">
          <div className="flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7 7 7"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 10l7-7 7 7"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  )
}

export default App
