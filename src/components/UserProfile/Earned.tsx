import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import { toHTTP } from "@/lib/utils"
import { useNavigate } from '@tanstack/react-router'

const completedBooksQueryDocument = gql`
  query ChainDetails($address: String) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
        slug  # Ensure this is included in your GraphQL response
      }
    }
  }
`

type Book = {
    token: { imageUrl: string }
    name: string
    slug: string  // Add slug to the Book type
  }

type GraphReturn = {
  user: {
    completedQuestChains: Array<Book>
  }
}

const Earned = ({account}: {account?: string}) => {
  const navigate = useNavigate()  // Use the navigate hook from TanStack Router
  const {
    data: {user}
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`completed-${account}`],
    queryFn: async () => request(
      import.meta.env.VITE_THE_GRAPH_QUEST_CHAINS_URL,
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
              {user.completedQuestChains?.map((book: Book) => (
                  <CarouselItem
                    key={book.name}
                    className="md:basis-1/2 lg:basis-1/3 cursor-pointer"
                    onClick={() => navigate({ to: `/book/${book.slug}/0` })}  // Navigate to the book page
                  >
                    <div className="p-1">
                      <Card>
                        <CardTitle className="text-center text-base mt-2 mx-2">{book.name}</CardTitle>
                        <CardContent className="flex aspect-auto items-center justify-center p-2">
                          <figure className="">
                            <img
                              src={toHTTP(book.token.imageUrl)}
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