import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { request } from '../../lib/datocms'
import { renderMetaTags, Image, TitleMetaLinkTag } from 'react-datocms'

import { motion } from 'framer-motion'

import ReactMarkdown from 'react-markdown'

import LinksSection from '../../components/LinksSection'

import { MdArrowBackIosNew } from 'react-icons/md'

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
        responsiveImage(imgixParams: {fit: crop, w: 350, h: 350, auto: format}) {
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
  const router = useRouter()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-6 ">
      <Head>
        {
          // @ts-ignore
          renderMetaTags([...song.seo, ...site.favicon])
        }
      </Head>
      <div className="container flex flex-row flex-wrap items-start justify-center gap-6">
        <Image data={song.cover.responsiveImage} className="rounded-xl" />
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex max-w-sm flex-col gap-2 rounded-lg bg-gray-800 p-6"
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div
                  className="group flex cursor-pointer flex-row items-center justify-start gap-2"
                  onClick={() => router.back()}
                >
                  <MdArrowBackIosNew className="fill-gray-300 transition group-hover:fill-white" />
                  <p className="text-sm text-gray-300 transition group-hover:text-white">
                    Return to the main page
                  </p>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    {song.title}
                  </h1>
                  <h2 className="text-gray-300">{song.author}</h2>
                </div>
              </div>
              {song.links && <LinksSection {...song.links} />}
              {song.description && (
                <div className="prose prose-invert">
                  <ReactMarkdown>{song.description}</ReactMarkdown>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Song
