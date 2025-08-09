import React from 'react'
import { renderToString } from 'react-dom/server'
import App from './src/App.jsx'

export async function prerender({ url }) {
  // 單頁站就直接渲染 App；若未來有多路由，可依 url 切換內容
  const html = renderToString(React.createElement(App))

  // 這裡把 SEO/OG 全部注入 <head>
  const SITE = 'https://portfolio-blue-three-i9wkudfxhn.vercel.app'
  const head = {
    title: 'Tuna Sung | Portfolio',
    elements: new Set([
      { type: 'meta', props: { name: 'description', content: '菜鳥全端工程師作品集：React、Tailwind、Node、MySQL、動畫特效與實戰案例。' } },
      { type: 'meta', props: { property: 'og:title', content: 'Tuna Sung | Portfolio' } },
      { type: 'meta', props: { property: 'og:description', content: '專案、技術棧與聯絡方式。' } },
      { type: 'meta', props: { property: 'og:type', content: 'website' } },
      { type: 'meta', props: { property: 'og:url', content: SITE } },
      { type: 'meta', props: { property: 'og:site_name', content: "Tuna's Portfolio" } },
      { type: 'meta', props: { property: 'og:image:alt', content: 'Tuna Sung Portfolio preview' } },

      { type: 'meta', props: { property: 'og:image', content: `${SITE}/welcome.png` } },
      { type: 'meta', props: { property: 'og:image:width', content: '1200' } },
      { type: 'meta', props: { property: 'og:image:height', content: '630' } },

      { type: 'meta', props: { name: 'twitter:card', content: 'summary_large_image' } },
      { type: 'meta', props: { name: 'twitter:title', content: 'Tuna Sung | Portfolio' } },
      { type: 'meta', props: { name: 'twitter:description', content: '菜鳥全端工程師作品集：React、Tailwind、Node、MySQL、動畫特效與實戰案例。' } },
      { type: 'meta', props: { name: 'twitter:image', content: `${SITE}/welcome.png` }} ,

      { type: 'link', props: { rel: 'canonical', href: SITE } }
    ]),
  }

  // 目前是單頁，給 '/'；未來多頁可把新路由 push 進來
  const links = new Set(['/'])

  return { html, head, links }
}
