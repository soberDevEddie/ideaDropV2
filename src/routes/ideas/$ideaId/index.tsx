import { createFileRoute } from '@tanstack/react-router';

const fetchIdea = async (ideaId: string) => {
  const res = await fetch(`/api/ideas/${ideaId}`);

  if (!res.ok) {
    throw new Response('Idea not found', { status: 404 });
  }

  return res.json();
};

export const Route = createFileRoute('/ideas/$ideaId/')({
  component: IdeaDetailsPage,
  loader: async ({ params }) => {
    fetchIdea(params.ideaId);
  },
});

function IdeaDetailsPage() {
  const idea = Route.useLoaderData();

  return <div>{ideaId}!</div>;
}
