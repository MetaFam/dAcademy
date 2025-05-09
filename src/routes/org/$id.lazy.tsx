import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { useQuery } from '@tanstack/react-query'
import request, { gql } from 'graphql-request'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { toHTTP } from '@/lib/utils'
import TopOrg from '@/components/TopOrg'
import playbooks from '@/data/playbooks.json'
import { useSubgraph } from '@/hooks'

const bookImageQueryDocument = gql`
  query BookImages($name: String) {
    Books {
      details {
        image
        name
        slug
      }
    }
  }
`

export const Route = createLazyFileRoute('/org/$id')({
  component: App,
})

export type CoverImageResponse = {
  books: Array<{
    details: {
      image: string | null
      name: string
      slug: string
    }
  }>
}

export type Book = {
  title: string
  image?: string
  alt?: string
  displayTitle?: boolean
}

export type Category = {
  title: string
  description: string
  books: Array<Book>
}

const titleLess = ['how-to-build-a-network-for-impact']

export function App() {
  const subgraph = useSubgraph()
  const { data: info, error } = useQuery<Record<string, Book>>({
    queryKey: [`book-images`],
    queryFn: async (): Promise<Record<string, Book>> => {
      const { books: data } = await (
        request<CoverImageResponse>(
          subgraph, bookImageQueryDocument, {},
        )
      )
      return Object.fromEntries(
        data.map(({ details: { image, name, slug } }) => (
          [slug, {
            title: name,
            image: toHTTP(image ?? undefined)
          }]
        ))
      ) as Record<string, Book>
    },
  })
  if (error) console.error({ error })

  return (
    <>
      <div id="top" className="p-6 flex flex-col space-y-6 mx-20">
        {playbooks.map((shelf, index) => (
          <div key={index} className="space-y-2">
            <Carousel
              opts={{ align: 'start' }}
              className="w-full dark:text-white"
            >
              <h2 className="text-lg text-purple-400">
                {shelf.category}
              </h2>
              <h3 className="pb-4 md:text-base">
                {shelf.description}
              </h3>
              <CarouselContent>
                {shelf.books.map((slug, bookIndex) => (
                  <CarouselItem
                    key={bookIndex}
                    id={slug}
                    className="md:basis-1/2 lg:basis-1/4 2xl:basis-1/5"
                  >
                    <Link
                      to={`/book/${slug}`}
                      className="p-0 relative block"
                    >
                      {!titleLess.includes(slug) && (
                        <h3 className="text-xl font-semibold text-center absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 bg-black/30 p-2 max-sm:top-0">
                          {info?.[slug]?.title}
                        </h3>
                      )}
                      <Card className="dark:bg-zinc-800">
                        <CardContent className="flex items-center justify-center p-0 dark:text-white">
                          <img
                            className="object-cover rounded-r-lg border border-white"
                            src={info?.[slug]?.image}
                            title={slug}
                            alt={info?.[slug]?.title}
                          />
                        </CardContent>
                      </Card>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="dark:text-white" />
              <CarouselNext className="dark:text-white" />
            </Carousel>
          </div>
        ))}
        <TopOrg/>
      </div>
    </>
  )
}

export default App
