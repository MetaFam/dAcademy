import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import { responsive } from "../../carousel.config"
import Carousel from "react-multi-carousel"
import { toHTTP } from "../../utils"
import 'react-multi-carousel/lib/styles.css'

const completedBooksQueryDocument = gql`
  query ChainDetails($address: String!) {
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
    <Carousel
      {...{ responsive }}
      className="top-0 gap-4 md:gap-6 lg:gap-8 w-full mr-0"
    >
      {completed?.map((book: Book) => (
        <div key={book.name} className="card bg-secondary/25 h-auto max-w-md mr-4 mx-auto rounded-sm">
          <div className="card-body items-center text-center">
            <div className="tooltip cursor-default" data-tip={book.name}>
            <h2 className="card-title text-clip text-ellipsis overflow-hidden line-clamp-1">{book.name}</h2>
            </div>
            {/* <p>From org/shelf</p> */}
          </div>
          <figure className="px-2 pt-2 pb-4">
            <img
              src={toHTTP(book.token.imageUrl)}

              alt="Completion NFT"
              className="rounded-sm"
            />
          </figure>
        </div>
      ))}
    </Carousel>
  )
}

export default Earned