import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import request, { gql } from "graphql-request"
import { useState } from "react"
import { useSubgraph } from '@/hooks'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { collectionAtom, type Shelf } from "@/atoms/collectionAtom"
import { useAtom } from "jotai"

//this one needs work

const shelfSearch = gql`
  query ShelfSearch($search: String!) {
    shelfSearch(text: $search) {
      cover
      name
      id
      slug
    }
  }
`



type ShelfInfo = {
  cover: string
  name: string
  id: string
  slug: string

}

type ShelfResult = {
  shelfSearch: Array<ShelfInfo>
}


type SearchResult = Shelf


interface SortableItemProps {
  id: string
  name: string
  onRemove: () => void
}

function SortableItem({ id, name, onRemove }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex flex-grow hover:bg-gray-400/30 items-center cursor-move p-2 rounded"
    >
      <span className="flex-1 pl-1">{name}</span>
      <Button onClick={(e) => {
        e.stopPropagation();
        onRemove();
      }}>Remove</Button>
    </li>
  )
}

export function CollectionShelves() {
  const [searchString, setSearchString] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<Array<SearchResult> | null>([])
  const [selectedShelves, setSelectedShelves] = useAtom(collectionAtom)
  const subgraph = useSubgraph()

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // 8px movement required before drag starts
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  )

  const search = async () => {
    console.log({searchString})
    setSearching(true)
    try {
      const shelves = await (
        request<ShelfResult>(
          subgraph,
          shelfSearch,
          { search: searchString }
        )
      )

      const results = (
        shelves.shelfSearch.map((shelf: ShelfInfo) => ({
          cover: shelf.cover,
          name: shelf.name,
          id: shelf.id,
          slug: shelf.slug,
        }))
      )
      if(results.length === 0) {
        setSearchResults(null)
      } else {
        setSearchResults(Array.from(
          new Map(results.map(item => [item.slug, item])).values()
        ))
      }
      console.log({shelves})
    } finally {
      setSearching(false)
    }
  }

  const add = (result: SearchResult) => {
    setSelectedShelves((shelves) => [result, ...shelves.filter((shelf) => (
      shelf.slug !== result.slug
    ))])
  }

  const remove = (result: SearchResult) => {
    setSelectedShelves((shelves) => shelves.filter((shelf) => (
      shelf.slug !== result.slug
    )))
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over != null && active.id !== over?.id) {
      setSelectedShelves((shelves) => {
        const oldIndex = shelves.findIndex((shelf) => shelf.slug === active.id)
        const newIndex = shelves.findIndex((shelf) => shelf.slug === over.id)
        return arrayMove(shelves, oldIndex, newIndex)
      })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Select Shelves</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center justify-center space-x-2">
          <Input
            value={searchString}
            onChange={(evt) => {
              console.log('wtf')
              evt.preventDefault()
              setSearchString(evt.target.value)
            }}
            placeholder="Search current playbooks"
          />
          <Button disabled={searching} onClick={search} type="button">
            {searching ? <span className="animate-spin">↻</span> : 'Search'}
          </Button>
        </div>

        {/* Search Results */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Search Results</h3>
          <ul className="flex flex-col gap-2 border outline-2 p-2 min-h-[100px]">
            {searchResults === null ? (
              'No search results found.'
            ) : (
              searchResults.map((result) => (
                <li
                  key={result.slug}
                  className="flex flex-grow hover:bg-gray-400/20 items-center p-2 rounded"
                >
                  <span className="flex-1 pl-1">{result.name}</span>
                  <Button type="button" onClick={() => add(result)}>Add</Button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Selected Books */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold mb-2">Selected Books (Drag to reorder)</h3>
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={selectedShelves.map(shelf => shelf.slug)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="flex flex-col gap-2 border outline-2 p-2 min-h-[100px]">
                {selectedShelves.map((result) => (
                  <SortableItem
                    key={result.slug}
                    id={result.slug}
                    name={result.name}
                    onRemove={() => remove(result)}
                  />
                ))}
              </ul>
            </SortableContext>
          </DndContext>
        </div>
      </CardContent>
    </Card>
  )
}