import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { request } from '../../lib/datocms'
import { renderMetaTags, Image, TitleMetaLinkTag } from 'react-datocms'

import ReactMarkdown from 'react-markdown'
import LinksSection from '../../components/LinksSection'

export const getStaticPaths: GetStaticPaths = async () => {
  const query = `query Paths {
    allSongs {
      slug
    }
  }`
  const data = await request({ query: query })
  let paths: {
    params: {
      id: string
    }
  }[] = []
  data.allSongs.forEach((song: any) => {
    paths.push({
      params: {
        id: song.slug,
      },
    })
  })
  return {
    paths: paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `query Song($slug: String) {
    song(filter: {slug: {eq: $slug}}) {
      title
      author
      description
      cover {
        responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
          srcSet
          webpSrcSet
          sizes
          src
          width
          height
          aspectRatio
          alt
          title
          base64
        }
      }
      links
      createdAt
      seo: _seoMetaTags {
        attributes
        content
        tag
      }
    }
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }`
  const data = await request({ query: query, variables: { slug: params?.id } })
  return {
    props: {
      ...data,
    },
  }
}

type Props = {
  song: {
    title: string
    author: string
    description?: string
    cover: {
      responsiveImage: {
        srcSet: string
        webpSrcSet: string
        sizes: string
        src: string
        width: number
        height: number
        aspectRatio: number
        alt: string
        title: string
        base64: string
      }
    }
    links?: {
      soundcloud?: string
      youtube?: string
      spotify?: string
      apple?: string
      tidal?: string
      download?: {
        radio: string
        extended?: string
      }
    }
    createdAt: string
    seo: TitleMetaLinkTag
  }
  site: {
    favicon: TitleMetaLinkTag
  }
}

const Song: NextPage<Props> = ({ song, site }) => {
  const title = song.title.includes('(Coegi Remix)')
    ? `${song.title.split('(Coegi Remix)')[0]}
      \n(Coegi Remix)`
    : song.title
  return (
    <div className="min-h-screen bg-transparent">
      <Head>
        {
          // @ts-ignore
          renderMetaTags([...song.seo, ...site.favicon])
        }
      </Head>
      <div className="relative">
        <Image data={song.cover.responsiveImage} layout="fill" objectFit="cover" className="absolute w-full min-h-screen brightness-50" />
        <div className="p-4 flex flex-col items-center min-h-screen justify-center backdrop-blur-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start justify-center shadow-2xl bg-white p-4 gap-4 z-20 rounded-md">
            <Image data={song.cover.responsiveImage} className="rounded-md" layout="responsive" />
            <div
              className="h-full flex w-full flex-col gap-2 z-20 rounded-b-md sm:rounded-bl-none md:rounded-r-md"
            >
              <div className="flex flex-col justify-center gap-4 text-center sm:text-left">
                <div className="flex flex-col gap-2 text-neutral-900">
                  <h1 className="text-4xl font-bold italic">
                    <ReactMarkdown>{title.toUpperCase()}</ReactMarkdown>
                  </h1>
                  <h2 className="text-sm">{song.author}</h2>
                </div>
                {song.links && <LinksSection {...song.links} />}
                {song.description && (
                  <div className="prose prose-neutral prose-sm">
                    <ReactMarkdown>{song.description}</ReactMarkdown>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Song
