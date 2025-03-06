import { createLazyFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { BookResults } from '@/components/Search/BookResults'

export const Route = createLazyFileRoute('/search/')({
  component: SearchComponent,
})

function SearchComponent() {
  const params = new URLSearchParams(window.location.search)
  const query = params.get('q')
  if(!query) throw new Error('No query string')
  return (
    <>
    <h1> Searching for: <q>{query}</q></h1>
    <h2> Book Results: </h2>
    <Suspense fallback="Loading"><BookResults {...{ query}}/></Suspense>
    </>
  )
}
