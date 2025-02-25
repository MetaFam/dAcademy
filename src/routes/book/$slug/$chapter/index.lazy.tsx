import { Suspense } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import Chapters from '@/components/Book/Chapters'
import Content from '@/components/Book/Content'
import Reward from '@/components/Book/Reward'
import { BookHeader } from '@/components/Book/BookHeader'
import { BookProvider } from '@/infrastructure/BookContext'
import '@mdxeditor/editor/style.css'
import '@/markdown-editor.css'
import { LoggingErrorBoundary } from '@/infrastructure/LoggingErrorBoundary'

export const Route = createLazyFileRoute('/book/$slug/$chapter/')({
  component: Book,
})

export function Book() {
  const { slug, chapter } = Route.useParams()
  try {
     return (
      <LoggingErrorBoundary>
        <BookProvider chapter={Number(chapter)} {...{ slug}}>
          <article
            id="top"
            className="container mx-auto py-20 px-8 lg:px-24 overflow-auto relative"
          >
            <BookHeader />
            <main className="md:flex justify-start relative">
              <Suspense fallback={<h1 className="mt-44">Loading…</h1>}>
                <Chapters />
                <Content />
                <Reward />
              </Suspense>
            </main>
          </article>
        </BookProvider>
      </LoggingErrorBoundary>
    )
  } catch (error) {
    return <h1>Error: {(error as Error).message}</h1>
  }
}