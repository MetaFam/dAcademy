import { useEffect, useState } from "react"
import { Book, BookError, useBook } from "@/infrastructure/BookContext"
import { createPublicClient, http } from "viem"
import { mainnet } from "viem/chains"

export const BookHeader = () => {
  const book = useBook()
  const [creator, setCreator] = useState('Unknown')
  useEffect(() => {
    if(book && 'creator' in book) {
      setCreator(`${book.creator.substring(0, 5)}⋯${book.creator.slice(-3)}`)
      const client = createPublicClient({
        chain: mainnet,
        transport: http(),
      })

      client
      .getEnsName({ address: book.creator as `0x${string}` })
      .then((name) => { if (name) setCreator(name) })
    }
  }, [])

  if(book && (book as BookError).error) {
    throw (book as BookError).error
  }

  return (
    <header>
      <h2 className="text-sm text-blue-500 mt-5 text-left pl-1">
        Creator: {creator}
      </h2>
      <h1 className="text-4xl md:text-6xl font-bold text-left mt-2">
        {(book as Book)?.title}
      </h1>
      <p className="text-sm text-white text-left pl-1 mt-6 mb-4">
        Last Updated:{' '}
        {(book as Book)?.updatedAt?.toLocaleString(
          undefined,
          { day: 'numeric', month: 'long', year: 'numeric' },
        ) ?? 'Unknown'}
      </p>
    </header>
  )
}