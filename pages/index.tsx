import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { request } from '../lib/datocms'
import { renderMetaTags, TitleMetaLinkTag } from 'react-datocms'

import type responsiveImage from '../types/responsiveImage'
import type SongType from '../types/song'

import SongsSection from '../components/SongsSection'
import ArtistSection from '../components/ArtistSection'

export const getStaticProps: GetStaticProps = async () => {
  const query = `query Home {
    artist {
      name
      description
      picture {
        responsiveImage(imgixParams: {fit: crop, w: 200, h: 200, auto: format}) {
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
      socials
    }
    songs: allSongs(orderBy: [uploadedAt_DESC]) {
      slug
      title
      author
      cover {
        responsiveImage(imgixParams: {fit: crop, w: 200, h: 200, auto: format}) {
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
    }
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
  artist: {
    name: string
    description: string
    picture: {
      responsiveImage: responsiveImage
    }
    socials: {
      instagram?: string
      facebook?: string
      twitter?: string
      soundcloud?: string
      spotify?: string
      youtube?: string
    }
  }
  songs: SongType[]
  site: {
    favicon: TitleMetaLinkTag
  }
}

const Home: NextPage<Props> = ({ artist, songs, site }) => {
  return (
    <div className="flex min-h-screen w-full flex-row flex-wrap items-start justify-center gap-x-8 bg-gray-900 px-6">
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
      <ArtistSection {...artist} />
      <SongsSection songs={songs} />
    </div>
  )
}

export default Home
