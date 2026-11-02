import PostCard from '../blog/PostCard';
import { getPosts } from '../blog/posts';
import { BLOG_DESCRIPTION, BLOG_TITLE } from '../blog/seo';
import { useDocumentTitle } from '../lib/useDocumentTitle';

const BlogIndex = () => {
  useDocumentTitle(BLOG_TITLE);
  const posts = getPosts();

  return (
    <main className="min-h-screen bg-[#f7f7f2] pt-32 pb-24">
      <div className="container mx-auto px-4">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Blog</h1>
          <p className="mt-4 text-lg text-gray-600">{BLOG_DESCRIPTION}</p>
        </header>

        {posts.length === 0 ? (
          <p className="text-gray-500">Belum ada tulisan.</p>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogIndex;
