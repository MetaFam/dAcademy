import { createLazyFileRoute } from '@tanstack/react-router'
import Chapters from '../../../components/Chapters'
import Content from '../../../components/Content'
import Reward from '../../../components/Reward'
import { BookHeader } from '../../../components/BookHeader'
import { BookProvider } from '../../../BookContext'
// import { debug } from '../../../main'
import '@mdxeditor/editor/style.css'
import '../../../markdown-editor.css'
import { Suspense } from 'react'

export const Route = createLazyFileRoute('/book/$slug/')({
  component: Book,
})

export function Book() {
  try {
    const { slug } = Route.useParams()

    return (
      <BookProvider {...{ slug }}>
        <article
          id="top"
          className="container mx-auto py-20 px-5 overflow-auto relative"
        >
          <BookHeader />
          <main className="md:flex justify-start overflow-hidden relative">
            <Suspense fallback={<h1>Loading…</h1>}>
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
