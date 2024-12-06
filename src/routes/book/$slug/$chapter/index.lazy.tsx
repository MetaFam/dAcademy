import { Suspense } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Chapters from '@/components/Book/Chapters'
import Content from '@/components/Book/Content'
import Reward from '@/components/Book/Reward'
import { BookHeader } from '@/components/Book/BookHeader'
import { BookProvider } from '@/data/BookContext'
import '@mdxeditor/editor/style.css'
import '@/markdown-editor.css'


export const Route = createLazyFileRoute('/book/$slug/$chapter/')({
  component: Book,
})

export function Book() {
  try {
    const { slug, chapter } = Route.useParams()

    return (
      <BookProvider chapter={Number(chapter)} {...{ slug}}>
        <article
          id="top"
          className="container mx-auto py-20 px-8 lg:px-24 overflow-auto relative"
        >
          <BookHeader />
          <main className="md:flex justify-start overflow-hidden relative">
            <Suspense fallback={<h1 className="mt-44">Loading…</h1>}>
              <Chapters />
              <Content />
              <Reward />
            </Suspense>
          </main>
        </article>
      </BookProvider>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}