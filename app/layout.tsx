import { request } from '../lib/datocms'
import '../styles/globals.css'
import Header from './Header'

const getLinks = async () => {
  const query = `query Home {
    links: artist {
      instagram
      facebook
      twitter
      soundcloud
      spotify
      youtube
      apple
    }
    metadata: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }`
  const data = await request({ query: query })
  return data
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { links, metadata } = await getLinks()
  return (
    <html
      lang="en"
      className="flex h-full flex-col items-center bg-neutral-800 text-white antialiased"
    >
      <body className="sm:jsutify-start flex h-full w-full flex-col-reverse items-center justify-between sm:flex-col sm:justify-start">
        <Header links={links} />
        <div className="container">{children}</div>
      </body>
    </html>
  )
}

export default RootLayout
