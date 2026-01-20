import type { Idea } from '@/types';
import { Link } from '@tanstack/react-router';
import clsx from 'clsx';

interface IdeaCardProps {
  idea: Idea;
  button?: boolean;
}

const IdeaCard = ({ idea, button = true }: IdeaCardProps) => {
  const linkClasses = clsx({
    'text-blue-600 hover:underline mt-3': !button,
    'mt-4 text-white rounded px-4 py-2 bg-blue-600 hover:underline hover:bg-blue-700 text-center':
      button,
  });

  return (
    <div
      key={idea._id}
      className='border border-gray-300 p-4 rounded shadow bg-white flex flex-col justify-between'
    >
      <div>
        <h2 className='text-lg font-semibold'>{idea.title}</h2>
      </div>
      <p className='mt-2 text-gray-700'>{idea.summary}</p>
      <Link
        to='/ideas/$ideaId'
        params={{ ideaId: idea._id.toString() }}
        className={linkClasses}
      >
        {button ? 'View Idea' : 'Read more →'}
      </Link>
    </div>
  );
};

export default IdeaCard;
