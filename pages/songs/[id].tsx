import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { request } from '../../lib/datocms'
import { renderMetaTags, Image, TitleMetaLinkTag } from 'react-datocms'

import ReactMarkdown from 'react-markdown'
import LinksSection from '../../components/LinksSection'
import { motion } from 'framer-motion'

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
  return (
    <div className="min-h-screen bg-transparent">
      <Head>
        {
          // @ts-ignore
          renderMetaTags([...song.seo, ...site.favicon])
        }
      </Head>
      <div className="relative">
        <Image
          data={song.cover.responsiveImage}
          layout="fill"
          objectFit="cover"
          className="absolute min-h-screen w-full brightness-50"
        />
        <div className="flex min-h-screen flex-col items-center justify-center p-4 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="z-20 flex flex-col items-start justify-center gap-4 gap-y-0 rounded-md bg-neutral-800 shadow-2xl sm:flex-row"
          >
            <Image
              data={song.cover.responsiveImage}
              className="rounded-t-md sm:rounded-l-md sm:rounded-r-none"
              layout="intrinsic"
            />
            <div className="z-20 flex h-full flex-col gap-4 rounded-b-md p-4 text-center text-white sm:max-h-[500px] sm:max-w-[500px] sm:overflow-y-auto sm:rounded-r-md sm:rounded-bl-none sm:p-0 sm:py-4 sm:pr-4 sm:text-left">
              <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold italic">
                  <ReactMarkdown>{song.title.toUpperCase()}</ReactMarkdown>
                </h1>
                <h2 className="text-sm">{song.author}</h2>
              </div>
              {song.links && <LinksSection {...song.links} />}
              {song.description && (
                <div className="prose-sm">
                  <ReactMarkdown>{song.description}</ReactMarkdown>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Song
