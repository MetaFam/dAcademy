import { useSubgraph } from "@/hooks"
import { toHTTP } from "@/lib/utils"
import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import Markdown from "react-markdown"

const shelfQueryDocument = gql`
  query shelfDetails($query: String!) {
    shelfSearch(text: $query) {
      name
      description
      cover
      slug
    }
  }
`

  type GraphReturn = {shelfSearch: Array<{
    name: string
    description: string
    cover: string
    slug: string
  }>}

export function ShelfResults({query}: {query:string}) {

  const subgraph = useSubgraph()
  const {
    data: {shelfSearch}
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`search-shelf-${query}`],
    queryFn: async () => request(
      subgraph,
      shelfQueryDocument,
      { query },
    ),
  })

  return (
    <ul>
      {shelfSearch.length === 0 ? (
        'No results found.'
      ) : (
        shelfSearch.map((shelf) => (
          <li>
            <details>
              <summary>
                <a href={`/#/shelf/${shelf.slug}`}>
                  {shelf.name}
                  <img className="max-h-48" src={toHTTP(shelf.cover)}/>
                </a>
              </summary>
              <Markdown>
                {shelf.description}
              </Markdown>
            </details>
          </li>
        ))
      )}
    </ul>
  )
}