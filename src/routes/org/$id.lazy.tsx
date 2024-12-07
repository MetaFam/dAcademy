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
import playbooks from '@/data/playbooks.json'
import { toHTTP, toSlug } from '@/lib/utils'
import TopOrg from '@/components/TopOrg'

const chainImageQueryDocument = gql`
  query ChainImages($name: String) {
    questChains {
      imageUrl
      name
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


const titleLess = ['How to Build a Network for Impact']

export function App() {
  const { data: images, error } = useQuery<Record<string, string>>({
    queryKey: [`chain-images`],
    queryFn: async (): Promise<Record<string, string>> => {
      const { questChains: data } = await request<CoverImageResponse>(
        import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
        chainImageQueryDocument,
        {},
      )
      console.log({ data })
      return Object.fromEntries(
        data.map(({ imageUrl, name }) => [name, toHTTP(imageUrl ?? undefined)]),
      ) as Record<string, string>
    },
  })
  if (error) console.error({ error })


  return (
    <>
      <div id="top" className="p-6 flex flex-col space-y-6 mx-20">
        {playbooks.map((category, index) => (
          <div key={index} className="space-y-2">
            <Carousel
              opts={{
                align: 'start',
              }}
              className="w-full max-sm:max-w-sm max-md:max-w-md max-lg:max-w-lg max-xl:max-w-xl dark:text-white"
            >
              <h2 className="text-lg text-purple-400">{category.title}</h2>
              <h3 className="pb-4 md:text-base">{category.description}</h3>
              <CarouselContent>
                {category.books.map((book, bookIndex) => (
                  <CarouselItem
                    key={bookIndex}
                    id={toSlug(book.title)}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <Link
                      to={`/book/${toSlug(book.title)}`}
                      className="p-0 relative"
                    >
                      {!titleLess.includes(book.title) && (
                        <h3 className="text-xl font-semibold text-center absolute top-1/2 left-1/2 -translate-x-1/2 md:-translate-y-1/2 bg-black/30 p-2 max-sm:top-0">
                          {book.title}
                        </h3>
                      )}
                      <Card className="dark:bg-zinc-800">
                        <CardContent className="flex items-center justify-center p-0 dark:text-white">
                          <img
                            className="object-cover rounded-r-lg border border-white"
                            src={images?.[book.title]}
                            alt={book.title}
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
