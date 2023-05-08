import { request } from '../lib/datocms'
import '../styles/globals.css'
import Header from '../components/Header'

const getMetadata = async () => {
  const query = `query Home {
    site: _site {
      metadata: globalSeo {
        titleSuffix
        twitterAccount
        facebookPageUrl
        fallback: fallbackSeo {
          description
          twitterCard
          title
          image {
            url
          }
        }
      }
    }
  }`
  const { site } = await request({ query: query })
  // console.log(site.metadata)
  return site.metadata
}

export async function generateMetadata() {
  const metadata = await getMetadata()
  return {
    title: {
      default: metadata.fallback.title,
      template: `%s${metadata.fallback.titleSuffix}`,
    },
    description: metadata.fallback.description,
    twitter: {
      card: metadata.fallback.twitterCard,
      title: metadata.fallback.title,
      description: metadata.fallback.description,
      creator: metadata.twitterAccount,
      images: [metadata.fallback.image.url],
    },
  }
}

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
  }`
  const data = await request({ query: query })
  return data
}

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const { links } = await getLinks()
  return (
    <html
      lang="en"
      className="flex h-full flex-col items-center bg-neutral-900 text-white antialiased"
    >
      <body className="container flex h-full w-full flex-col items-center justify-start px-4 py-8 sm:px-6 lg:px-8">
        <Header links={links} />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
