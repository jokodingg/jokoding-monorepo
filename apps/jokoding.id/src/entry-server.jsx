// Hanya dipakai saat build oleh scripts/prerender.js.
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'

export { getPosts } from './blog/posts'
export { blogIndexMeta, postMeta, renderHead } from './blog/seo'
export { computerVisionMeta, CV_PATH } from './landing/computerVision'
export { buildSitemap } from './blog/sitemap'

export const render = (url) =>
  renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  )
