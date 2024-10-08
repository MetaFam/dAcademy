import { createLazyFileRoute } from '@tanstack/react-router'
import BookContent from '../../book'

export const Route = createLazyFileRoute('/book/$title')({
  component: Book,
})

function Book() {
  const { title } = Route.useParams()
  return <BookContent />
}
