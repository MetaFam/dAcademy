import { useSubgraph } from "@/hooks"
import { toHTTP } from "@/lib/utils"
import { useSuspenseQuery } from "@tanstack/react-query"
import request, { gql } from "graphql-request"
import Markdown from "react-markdown"

const collectionQueryDocument = gql`
  query collectionDetails($query: String!) {
    collectionSearch(text: $query) {
      name
      description
      cover
      slug
    }
  }
`

  type GraphReturn = {collectionSearch: Array<{
    name: string
    description: string
    cover: string
    slug: string
  }>}

export function CollectionResults({query}: {query:string}) {

  const subgraph = useSubgraph()
  const {
    data: {collectionSearch}
  } = useSuspenseQuery<GraphReturn>({
    queryKey: [`search-collection-${query}`],
    queryFn: async () => request(
      subgraph,
      collectionQueryDocument,
      { query },
    ),
  })

  return (
    <ul>
      {collectionSearch.length === 0 ? (
        'No results found.'
      ) : (
        collectionSearch.map((collection) => (
          <li>
            <details>
              <summary>
                <a href={`/#/collection/${collection.slug}`}>
                  {collection.name}
                  <img className="max-h-48" src={toHTTP(collection.cover)}/>
                </a>
              </summary>
              <Markdown>
                {collection.description}
              </Markdown>
            </details>
          </li>
        ))
      )}
    </ul>
  )
}