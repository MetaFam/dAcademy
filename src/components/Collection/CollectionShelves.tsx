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
import { frontMatterAtom } from "@/atoms/shelfAtom"
import { useAtom } from "jotai"

//this one needs work

const chainSearch = gql`
  query ChainSearch($search: String!) {
    chainSearch(text: $search) {
      name
      questChain{ id }
    }
  }
`

const questSearch = gql`
  query QuestSearch($search: String!) {
    questSearch(text: $search) {
      quest{
        questChain{
          id
          details{ name }
        }
      }
    }
  }
`

type ChainInfo = {
  name: string
  questChain: {
    id: string
  }
}

type ChainResult = {
  chainSearch: Array<ChainInfo>
}
type QuestResult = {
  questSearch: Array<QuestInfo>
}

type QuestInfo = {
  quest: {
    questChain: {
      id: string
      details: { name: string }
    }
  }
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
  const [selectedShelves, setSelectedShelves] = useAtom(frontMatterAtom)
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
      const [chains, quests] = await Promise.all([
        request<ChainResult>(
          subgraph,
          chainSearch,
          { search: searchString }
        ),
        request<QuestResult>(
          subgraph,
          questSearch,
          { search: searchString }
        ),
      ])

      const results = ([
        ...chains.chainSearch.map((chain: ChainInfo) => ({
          name: chain.name,
          id: chain.questChain.id,
        })),
        ...quests.questSearch.map((quest: QuestInfo) => ({
          name: quest.quest.questChain.details.name,
          id: quest.quest.questChain.id,
        }))
      ])
      if(results.length === 0) {
        setSearchResults(null)
      } else {
        setSearchResults(Array.from(
          new Map(results.map(item => [item.id, item])).values()
        ))
      }
      console.log({chains})
    } finally {
      setSearching(false)
    }
  }

  const add = (result: SearchResult) => {
    setSelectedShelves((shelves) => [result, ...shelves.filter((shelf) => (
      book.id !== result.id
    ))])
  }

  const remove = (result: SearchResult) => {
    setSelectedShelves((shelves) => shelves.filter((shelf) => (
      book.id !== result.id
    )))
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over != null && active.id !== over?.id) {
      setSelectedShelves((shelves) => {
        const oldIndex = shelves.findIndex((shelf) => shelf.id === active.id)
        const newIndex = shelves.findIndex((shelf) => shelf.id === over.id)
        return arrayMove(shelves, oldIndex, newIndex)
      })
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-center text-xl">Select Books</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex w-full items-center justify-center space-x-2">
          <Input
            value={searchString}
            onChange={({target: {value}}) => setSearchString(value)}
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
                  key={result.id}
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
              items={selectedShelves.map(shelf => shelf.id)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="flex flex-col gap-2 border outline-2 p-2 min-h-[100px]">
                {selectedShelves.map((result) => (
                  <SortableItem
                    key={result.id}
                    id={result.id}
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