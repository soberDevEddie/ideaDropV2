import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/ideas/$ideaId/edit')({
  component: IdeaEditPage,
})

function IdeaEditPage() {
  return <div>Hello "/ideas/$ideaId/edit"!</div>
}
