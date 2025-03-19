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

  function collapseChildren(evt) {
    let curr = evt.target
    if(!curr.checked) {
        curr.checked = false
        const list = curr.closest('label').nextElementSibling

        Array.from(list.querySelectorAll('input[type="checkbox"]')).forEach((elem) => {
          elem.checked = false
        })
      }
    evt.target.closest
  }

  return (
    <main>
      <ol id="collections">
        {collections.map(({ details, contents }, idx) => (
          (details && (
            <li key={idx} className="flex gap-4">
              <label>
                <input type="checkbox" onChange={collapseChildren}/>
                <HoverCover {...details} />
              </label>
              <ol className="shelves">
                {contents.map(({ details, contents }, idx) => (
                  <li key={idx}>
                    <label>
                      <input type="checkbox" onChange={collapseChildren}/>
                      <HoverCover className="label-checked" {...details} />
                    </label>
                    <ol className="books">
                      {contents.map(({ details }, idx) => (
                        <li key={idx}>
                          <label>
                            <input type="checkbox" />
                            <HoverCover className="label-checked" name={details.name} cover={details.image} description={details.description}/>
                          </label>
                        </li>
                      ))}
                    </ol>
                  </li>
                ))}
              </ol>
            </li>
          ))
        ))}
      </ol>
    </main>
  )
}
