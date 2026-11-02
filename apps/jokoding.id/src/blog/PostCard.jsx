import { Link } from 'react-router-dom';
import { formatDate } from './formatDate';

const PostCard = ({ post }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/40"
  >
    <div className="relative aspect-video overflow-hidden bg-linear-to-br from-gray-900 to-emerald-950">
      {post.cover && (
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      )}
      {post.draft && (
        <span className="absolute left-3 top-3 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-gray-900">
          Draft
        </span>
      )}
    </div>
    <div className="flex flex-1 flex-col p-6">
      <time dateTime={post.date} className="text-xs font-medium uppercase tracking-wide text-emerald-700">
        {formatDate(post.date)}
      </time>
      <h2 className="mt-2 text-lg font-bold leading-snug text-gray-900 group-hover:text-emerald-700">
        {post.title}
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{post.description}</p>
    </div>
  </Link>
);

export default PostCard;
