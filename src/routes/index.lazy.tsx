import { HoverCover } from '@/components/Frontpage/HoverCover'
import { useSubgraph } from '@/hooks'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createLazyFileRoute } from '@tanstack/react-router'
import request, { gql } from 'graphql-request'
import '@/styles/home.css'

const collectionsQuery = gql`
  query CollectionQuery {
    collections(orderBy: updatedAt) {
      id
      details {
        slug
        cover
        name
        description
      }
      contents {
        id
        details {
          slug
          cover
          name
          description
        }
        contents {
          id
          details {
            slug
            image
            name
            description
          }
        }
      }
    }
  }
`
type Collection = {
  id: string
  details: {
    name: string
    description: string
    cover: string
    slug: string
  }
  contents: Array<{
    id: string
    details: {
      name: string
      description: string
      cover: string
      slug: string
    }
    contents: Array<{
      id: string
      details: {
        name: string
        description: string
        image: string
        slug: string
      }
    }>
  }>
}

type GraphReturn = {collections: Array<Collection>}


export const Route = createLazyFileRoute('/')({
  component: Collections,
})

function Collections() {
  const subgraph = useSubgraph()
  console.log({subgraph})
  const {
    data: { collections }
  } = useSuspenseQuery<GraphReturn>({
    queryKey: ['collections'],
    queryFn: async () => request(
      subgraph,
      collectionsQuery,
    ),
  })

  return (
    <ol>
      {collections.map(({ details, contents }, idx) => (
        (details && (
          <li key={idx} className="flex gap-4">
            <label>
              <input type="checkbox" />
              <HoverCover {...details} />
            </label>
            {contents.map(({ details, contents }) => (
              <label>
                <input type="checkbox" />
                <HoverCover className="label-checked" {...details} />
              </label>
            ))}
          </li>
        ))
      ))}
    </ol>
  )
}
