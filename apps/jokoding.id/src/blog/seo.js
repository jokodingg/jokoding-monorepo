export const SITE_URL = 'https://jokoding.id';
export const HOME_TITLE = 'Jokoding - Jasa Joki IT & Aplikasi Profesional Semarang';
export const BLOG_TITLE = 'Blog | Jokoding';
export const BLOG_DESCRIPTION = 'Video dan tulisan Jokoding seputar AI, web, IoT, dan dunia coding.';

const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;
const ORGANIZATION = { '@type': 'Organization', name: 'Jokoding', url: SITE_URL };

export const postTitle = (post) => `${post.title} | Blog Jokoding`;

const absoluteUrl = (path) => {
  if (!path) return DEFAULT_IMAGE;
  return /^https?:\/\//.test(path) ? path : `${SITE_URL}${path.startsWith('/') ? '' : '/'}${path}`;
};

export const blogIndexMeta = () => ({
  title: BLOG_TITLE,
  description: BLOG_DESCRIPTION,
  canonical: `${SITE_URL}/blog`,
  image: DEFAULT_IMAGE,
  type: 'website',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Blog Jokoding',
    description: BLOG_DESCRIPTION,
    url: `${SITE_URL}/blog`,
    publisher: ORGANIZATION,
  },
});

export const postMeta = (post) => {
  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const image = absoluteUrl(post.cover);

  return {
    title: postTitle(post),
    description: post.description,
    canonical,
    image,
    type: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      inLanguage: 'id',
      url: canonical,
      mainEntityOfPage: canonical,
      image,
      author: post.author
        ? { '@type': 'Person', name: post.author.name, ...(post.author.url && { url: post.author.url }) }
        : ORGANIZATION,
      publisher: ORGANIZATION,
      ...(post.video && {
        video: {
          '@type': 'VideoObject',
          name: post.title,
          description: post.description,
          thumbnailUrl: image,
          uploadDate: post.date,
          embedUrl: post.video.embedUrl,
        },
      }),
    },
  };
};

const escapeHtml = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const metaTag = (attr, key, content) => `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;

// Isi blok <!-- head:start --> ... <!-- head:end --> untuk halaman blog.
export const renderHead = (meta) =>
  [
    `<title>${escapeHtml(meta.title)}</title>`,
    metaTag('name', 'description', meta.description),
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    metaTag('property', 'og:type', meta.type),
    metaTag('property', 'og:url', meta.canonical),
    metaTag('property', 'og:title', meta.title),
    metaTag('property', 'og:description', meta.description),
    metaTag('property', 'og:image', meta.image),
    metaTag('property', 'og:locale', 'id_ID'),
    metaTag('property', 'og:site_name', 'Jokoding'),
    metaTag('name', 'twitter:card', 'summary_large_image'),
    metaTag('name', 'twitter:title', meta.title),
    metaTag('name', 'twitter:description', meta.description),
    metaTag('name', 'twitter:image', meta.image),
    `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ');
