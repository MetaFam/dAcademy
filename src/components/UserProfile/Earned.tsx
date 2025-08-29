import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import { toHTTP } from "@/lib/utils"
import { useNavigate } from '@tanstack/react-router'
import { useSubgraph } from "@/hooks"

const completedBooksQueryDocument = gql`
  query BookDetails($address: String) {
    user(id: $address) {
      completedBooks {
        token {
          details {
            name
            image
          }
        }
        details {
          slug
        }
      }
    }
  }
`

type Book = {
  details: {
    name: string
    slug: string
  }
  token: {
    details: {
      image: string
    }
  }
}

type GraphReturn = {
  user: {
    completedBooks: Array<Book>
  }
}

const Earned = ({account}: {account?: string}) => {
  const navigate = useNavigate()
  const subgraph = useSubgraph()
  const {
    data: {user}
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`completed-${account}`],
    queryFn: async () => request(
      subgraph,
      completedBooksQueryDocument,
      { address: account?.toLowerCase() },
    ),
  })

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">NFTs Earned</CardTitle>
      </CardHeader>
      <CardContent>
        {!!user && (
          <Carousel opts={{ align: "start" }} className="w-5/6 mx-auto">
            <CarouselContent>
              {user.completedBooks?.map((book: Book) => (
                  <CarouselItem
                    key={book.details.name}
                    className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
                    onClick={() => navigate({ to: `/book/${book.details.slug}/0` })}
                  >
                    <div className="p-1">
                      <Card>
                        <CardTitle className="text-center text-base mt-2 mx-2">{book.details.name}</CardTitle>
                        <CardContent className="flex aspect-auto items-center justify-center p-2">
                          <figure className="">
                            <img
                              src={toHTTP(book.token.details.image)}
                              alt="Completion NFT"
                              className="rounded-sm"
                            />
                          </figure>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </CardContent>
    </Card>
  );
}

export default Earned