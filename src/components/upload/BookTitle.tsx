import { useState } from "react"

export const BookTitle = () => {
  const [title, setTitle] = useState(localStorage.getItem('book.title'))

  return (
  <input onChange={(evt) => {
    const {value} = evt.target
    localStorage.setItem('book.title', value)
    setTitle(value)
  }}
    value={title ?? ''}
    id="title" placeholder="Title" className="input input-bordered w-full max-w-xs my-2" />
  )
}