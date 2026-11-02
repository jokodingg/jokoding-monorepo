import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import VideoEmbed from '../blog/VideoEmbed';
import { formatDate } from '../blog/formatDate';
import { getPost } from '../blog/posts';
import { postTitle } from '../blog/seo';
import { useOrderForm } from '../order/OrderFormProvider';
import { useDocumentTitle } from '../lib/useDocumentTitle';

const BackLink = () => (
  <Link
    to="/blog"
    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-emerald-700"
  >
    <ArrowLeft size={16} /> Semua tulisan
  </Link>
);

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPost(slug);
  const { open: openOrderForm } = useOrderForm();
  useDocumentTitle(post ? postTitle(post) : 'Tulisan tidak ditemukan | Blog Jokoding');

  if (!post) {
    return (
      <main className="min-h-screen bg-[#f7f7f2] pt-32 pb-24">
        <div className="container mx-auto max-w-3xl px-4">
          <h1 className="text-3xl font-bold text-gray-900">Tulisan tidak ditemukan</h1>
          <p className="mt-4 text-gray-600">Mungkin tulisannya sudah dipindah atau alamatnya salah ketik.</p>
          <div className="mt-8">
            <BackLink />
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f7f2] pt-32 pb-24">
      <div className="container mx-auto max-w-3xl px-4">
        <BackLink />

        <header className="mt-6 mb-10">
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">{post.title}</h1>
          <p className="mt-3 text-sm text-gray-500">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            {post.author && (
              <>
                {' · oleh '}
                {post.author.url ? (
                  <a
                    href={post.author.url}
                    target="_blank"
                    rel="noopener noreferrer author"
                    className="font-medium text-gray-700 underline decoration-emerald-500/40 underline-offset-4 hover:text-emerald-700"
                  >
                    {post.author.name}
                  </a>
                ) : (
                  <span className="font-medium text-gray-700">{post.author.name}</span>
                )}
              </>
            )}
          </p>
        </header>

        {/* Ada video: tampilkan embed. Tanpa video: cover jadi gambar pembuka. */}
        <div className="mb-12">
          {post.video ? (
            <VideoEmbed video={post.video} title={post.title} cover={post.cover} />
          ) : (
            post.cover && (
              <img
                src={post.cover}
                alt=""
                className="aspect-[1200/630] w-full rounded-2xl object-cover shadow-xl"
              />
            )
          )}
        </div>

        <article
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-emerald-700 prose-strong:text-gray-900 prose-li:marker:text-emerald-600 prose-code:font-medium prose-code:before:content-none prose-code:after:content-none [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-emerald-50 [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5 [&_:not(pre)>code]:text-emerald-900"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        <aside className="mt-16 rounded-3xl bg-linear-to-r from-gray-900 to-emerald-950 p-8 text-center shadow-2xl md:p-10 md:text-left">
          <h2 className="text-2xl font-bold text-white">Punya project IT yang mirip?</h2>
          <p className="mt-2 text-gray-300">Ceritakan kebutuhanmu, kami bantu dari konsultasi sampai jadi.</p>
          <button
            type="button"
            onClick={openOrderForm}
            className="mt-6 rounded-full bg-emerald-600 px-8 py-3 font-bold text-white shadow-[0_0_15px_rgba(16,185,129,0.3)] transition-all hover:-translate-y-0.5 hover:bg-emerald-500 cursor-pointer"
          >
            Konsultasi Gratis
          </button>
        </aside>
      </div>
    </main>
  );
};

export default BlogPost;
