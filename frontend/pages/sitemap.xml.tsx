import * as fs from 'fs'
import { GetServerSideProps } from "next"

const Sitemap = () => {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const BASE_URL = 'https://mishka-bar.ru'

  const staticPaths = fs
  .readdirSync("pages")
  .filter(staticPage => {
    return ![
      "api",
      "_app.tsx",
      "_document.tsx",
      "404.tsx",
      "sitemap.xml.tsx",
      "business-lunch.tsx"
    ].includes(staticPage)
  })
  .map(staticPagePath => {
    return `${BASE_URL}/${staticPagePath.split('.')[0]}`
  })

  const allPaths = [...staticPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths.map(url => {
        if (url === `${BASE_URL}/index`) {
            return (
                `<url>
                    <loc>${BASE_URL}</loc>
                    <lastmod>${new Date().toISOString()}</lastmod>
                    <changefreq>monthly</changefreq>
                    <priority>1.0</priority>
                </url>`
            )
        }
        return (
            `<url>
                <loc>${url}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
            </url>`
        )
        }).join("")}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap