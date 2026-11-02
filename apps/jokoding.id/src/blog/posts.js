import { parsePosts } from './parsePosts';

// Semua post dibaca saat build. Draft hanya tampil di dev.
const files = import.meta.glob('/content/blog/*.md', { query: '?raw', import: 'default', eager: true });
const posts = parsePosts(files, { includeDrafts: import.meta.env.DEV });

export const getPosts = () => posts;

export const getPost = (slug) => posts.find((post) => post.slug === slug);
