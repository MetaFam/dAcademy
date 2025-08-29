import { useSubgraph } from "@/hooks"
import { toHTTP } from "@/lib/utils"
import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import Markdown from "react-markdown"

const bookQueryDocument = gql`
  query BookDetails($query: String!) {
    bookSearch(text: $query) {
      name
      description
      image
      slug
    }
  }
`

  type GraphReturn = {bookSearch: Array<{
    name: string
    description: string
    image: string
    slug: string
  }>}

export function BookResults({query}: {query:string}) {

  const subgraph = useSubgraph()
  const {
    data: {bookSearch}
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`search-book-${query}`],
    queryFn: async () => request(
      subgraph,
      bookQueryDocument,
      { query },
    ),
  })

  return (
    <ul>
      {bookSearch.length === 0 ? (
        'No results found.'
      ) : (
        bookSearch.map((book) => (
          <li>
            <details>
              <summary>
                <a href={`/#/book/${book.slug}`}>
                  {book.name}
                  <img className="max-h-48" src={toHTTP(book.image)}/>
                </a>
              </summary>
              <Markdown>
                {book.description}
              </Markdown>
            </details>
          </li>
        ))
      )}
    </ul>
  )
}