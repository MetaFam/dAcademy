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
import { booksAtom, type Book } from "@/atoms/booksAtom"
import { useAtom } from "jotai"

const bookSearch = gql`
  query BookSearch($search: String!) {
    bookSearch(text: $search) {
      name
      book{ id }
    }
  }
`

const chapterSearch = gql`
  query ChapterSearch($search: String!) {
    ChapterSearch(text: $search) {
      chapter{
        book{
          id
          details{ name }
        }
      }
    }
  }
`

type BookInfo = {
  name: string
  book: {
    id: string
  }
}

type BookResult = {
  bookSearch: Array<BookInfo>
}
type ChapterResult = {
  chapterSearch: Array<ChapterInfo>
}

type ChapterInfo = {
  chapter: {
    book: {
      id: string
      details: { name: string }
    }
  }
}

type SearchResult = Book


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
        e.stopPropagation()
        onRemove()
      }}>Remove</Button>
    </li>
  )
}

export function ShelfBooks() {
  const [searchString, setSearchString] = useState("")
  const [searching, setSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<Array<SearchResult> | null>([])
  const [selectedBooks, setSelectedBooks] = useAtom(booksAtom)
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
    setSearching(true)
    try {
      const [books, chapters] = await Promise.all([
        request<BookResult>(
          subgraph,
          bookSearch,
          { search: searchString }
        ),
        request<ChapterResult>(
          subgraph,
          chapterSearch,
          { search: searchString }
        ),
      ])

      const results = ([
        ...books.bookSearch.map((book: BookInfo) => ({
          name: book.name,
          id: book.book.id,
        })),
        ...chapters.chapterSearch.map((chapter: ChapterInfo) => ({
          name: chapter.chapter.book.details.name,
          id: chapter.chapter.book.id,
        }))
      ])
      if(results.length === 0) {
        setSearchResults(null)
      } else {
        setSearchResults(Array.from(
          new Map(results.map(item => [item.id, item])).values()
        ))
      }
    } finally {
      setSearching(false)
    }
  }

  const add = (result: SearchResult) => {
    setSelectedBooks((books) => [result, ...books.filter((book) => (
      book.id !== result.id
    ))])
  }

  const remove = (result: SearchResult) => {
    setSelectedBooks((books) => books.filter((book) => (
      book.id !== result.id
    )))
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event

    if (over != null && active.id !== over?.id) {
      setSelectedBooks((books) => {
        const oldIndex = books.findIndex((book) => book.id === active.id)
        const newIndex = books.findIndex((book) => book.id === over.id)
        return arrayMove(books, oldIndex, newIndex)
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
            onChange={(evt) => {
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
              items={selectedBooks.map(book => book.id)}
              strategy={verticalListSortingStrategy}
            >
              <ul className="flex flex-col gap-2 border outline-2 p-2 min-h-[100px]">
                {selectedBooks.map((result) => (
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