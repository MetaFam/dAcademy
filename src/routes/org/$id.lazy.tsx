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

const chainImageQueryDocument = gql`
  query ChainImages($name: String) {
    questChains {
      imageUrl
      name
      slug
    }
  }
`

export const Route = createLazyFileRoute('/org/$id')({
  component: App,
})

export type CoverImageResponse = {
  questChains: Array<{
    imageUrl: string | null
    name: string
    slug: string
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
  const { data: info, error } = useQuery<Record<string, Book>>({
    queryKey: [`chain-images`],
    queryFn: async (): Promise<Record<string, Book>> => {
      const { questChains: data } = await (
        request<CoverImageResponse>(
          import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
          chainImageQueryDocument,
          {},
        )
      )
      return Object.fromEntries(
        data.map(({ imageUrl, name, slug }) => (
          [slug, {
            title: name,
            image: toHTTP(imageUrl ?? undefined)
          }]
        ))
      ) as Record<string, Book>
    },
  })
  if (error) console.error({ error })

  console.debug({ info})

  return (
    <>
      <div id="top" className="p-6 flex flex-col space-y-6 mx-20">
        {playbooks.map((shelf, index) => (
          <div key={index} className="space-y-2">
            <Carousel
              opts={{ align: 'start' }}
              className="w-full max-sm:max-w-sm max-md:max-w-md max-lg:max-w-lg max-xl:max-w-xl dark:text-white"
            >
              <h2 className="text-lg text-purple-400">{shelf.category}</h2>
              <h3 className="pb-4 md:text-base">{shelf.description}</h3>
              <CarouselContent>
                {shelf.books.map((slug, bookIndex) => (
                  <CarouselItem
                    key={bookIndex}
                    id={slug}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <Link
                      to={`/book/${slug}`}
                      className="p-0 relative"
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
