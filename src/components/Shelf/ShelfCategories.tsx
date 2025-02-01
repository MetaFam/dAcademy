import React, { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'
import { useAtom } from 'jotai'
import { shelfCatAtom } from '@/atoms/shelfCatAtom'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export const ShelfCategoriesInput: React.FC = () => {
  const [tags, setTags] = useAtom(shelfCatAtom)
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const newVal = inputValue.trim()
    if(e.key === 'Enter') {
      e.preventDefault()
      if(newVal && !tags.includes(newVal)) {
        setTags([...tags, newVal])
        setInputValue('')
      }
    }
  }

  const handleRemoveTag = (index: number) => {
    setTags((tags) => tags.toSpliced(index, 1))
  }

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  }, [tags])

  return (
    <Card className="flex flex-col justify-center items-center">
      <CardHeader>
        <CardTitle className="text-center text-xl">
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-2 border-gray-300 rounded-lg p-2 flex items-center flex-wrap gap-2 w-full max-w-md focus-within:border-blue-500">
          {tags.map((tag, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? "bg-blue-500" : "bg-blue-400"
              } text-white rounded-lg px-3 py-1 flex items-center gap-1`}
            >
              {tag}
              <X
                size={16}
                className="cursor-pointer"
                onClick={() => handleRemoveTag(index)}
              />
            </div>
          ))}
          <input
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Enter a Category"
            className="border-none outline-none flex-grow"
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default ShelfCategoriesInput