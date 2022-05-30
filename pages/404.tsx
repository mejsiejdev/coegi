import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { request } from '../lib/datocms'
import { TitleMetaLinkTag, renderMetaTags } from 'react-datocms'

import { MdErrorOutline, MdArrowBackIosNew } from 'react-icons/md'
import { useRouter } from 'next/router'

import { motion } from 'framer-motion'

export const getStaticProps: GetStaticProps = async () => {
  const query = `query Home {
      site: _site {
        favicon: faviconMetaTags {
          attributes
          content
          tag
        }
      }
    }`
  const data = await request({ query: query })
  return {
    props: {
      ...data,
    },
  }
}

type Props = {
  site: {
    favicon: TitleMetaLinkTag
  }
}

const Custom404: NextPage<Props> = ({ site }) => {
  const router = useRouter()
  return (
    <div className="flex min-h-screen w-full flex-row flex-wrap items-center justify-center gap-x-8 bg-gray-900 px-6">
      <Head>
        {
          //@ts-ignore
          renderMetaTags([...site.favicon])
        }
        <title>Coegi</title>
        <meta property="og:title" content="Coegi" />
        <meta name="twitter:title" content="Coegi" />
        <meta
          name="description"
          content="Official website of polish music producer and remixer, Coegi. "
        />
        <meta
          property="og:description"
          content="Official website of polish music producer and remixer, Coegi. "
        />
        <meta
          name="twitter:description"
          content="Official website of polish music producer and remixer, Coegi. "
        />
        <meta
          property="og:image"
          content="https://www.datocms-assets.com/70437/1651581330-profile.jpg"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
        <meta
          name="twitter:image"
          content="https://www.datocms-assets.com/70437/1651581330-profile.jpg"
        />
        <meta property="og:locale" content="en" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Coegi" />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/coegimusic"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@coegimusic" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex max-w-xl flex-col items-center rounded-lg bg-gray-800 p-6"
      >
        <h1 className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-8xl font-bold text-transparent animate-pulse">
          404
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-5xl font-bold text-white">Page not found</p>
          <p className="text-sm text-gray-300">
            The page you were looking for could not be found. It might have been
            removed, renamed, or did not exist in the first place.
          </p>
        </div>
        <div
          className="mt-6 cursor-pointer select-none rounded-lg bg-gradient-to-r from-blue-600 to-sky-400"
          onClick={() => router.push('/')}
        >
          <div className="flex h-full w-full flex-row items-center justify-around gap-2 rounded-lg px-8 py-2 transition hover:bg-white/20">
            <MdArrowBackIosNew className="fill-white" />
            <p className="text-sm font-bold text-white">Go to the main page</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Custom404
