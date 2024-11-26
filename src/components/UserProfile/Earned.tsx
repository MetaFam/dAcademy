// src/components/UserProfile/NftsEarned
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

const completedBooksQueryDocument = gql`
  query ChainDetails($address: String) {
    user(id: $address) {
      completedQuestChains {
        token {
          imageUrl
        }
        name
      }
    }
  }
`
type Book = {
    token: { imageUrl: string }
    name: string
  }

type GraphReturn = {
  user: {
    completedQuestChains: Array<Book>
  }
}
const Earned = ({account}: {account?: string}) => {
  const {
    data: { user: {completedQuestChains: completed} },
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
        <Carousel opts={{ align: "start" }} className="w-5/6 mx-auto">
          <CarouselContent>
            {completed?.map((book: Book) => (
                <CarouselItem key={book.name} className="md:basis-1/2 lg:basis-1/4">
                  <div className="p-1">
                    <Card>
                      <CardTitle className="text-center text-base mt-2">{book.name}</CardTitle>
                      <CardContent className="flex aspect-auto items-center justify-center p-6">
                        <figure className="px-2 pt-2 pb-4">
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
      </CardContent>
    </Card>
  );
}
export default Earned