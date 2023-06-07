import { request } from '../../../lib/datocms'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import Animate from '../../../components/Animate'
import { Metadata } from 'next'
import Progress from './Progress'

const getSong = async (
  slug: string
): Promise<{
  title: string
  description: string
  author?: string
  bpm?: number
  genre: { name: string }
  links: {
    soundcloud?: string
    spotify?: string
    tidal?: string
    youtube?: string
    apple?: string
    download?: {
      radio: string
      extended?: string
    }
  }
  cover: {
    alt: string
    url: string
    width: number
    height: number
    blurUpThumb: string
  }
  slug: string
  uploadedAt: string
}> => {
  const query = `{
  song(filter: {slug: {eq: "${slug}"}}) {
    slug
    title
    description
    author
    genre {
      name
    }
    links
    bpm
    cover {
      alt
      url
      width
      height
      blurUpThumb
    }
    uploadedAt
  }
}`
  const { song } = await request({ query: query })
  return song
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const query = `{
    song(filter: {slug: {eq: "${params.slug}"}}) {
      title
      description
      cover {
        url
      }
    }
  }`
  const { song } = await request({ query: query })
  return {
    title: song.title,
    description: song.description,
    openGraph: {
      title: song.title,
      siteName: 'Coegi',
      images: [
        {
          url: song.cover.url,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: song.title,
      creator: '@coegimusic',
      images: [song.cover.url],
    },
  }
}

const Song = async ({ params }: { params: { slug: string } }) => {
  const song = await getSong(params.slug)
  return (
    <Animate>
      {/* A side-by-side container for the song image and it's info */}
      <div className="flex w-full flex-col items-center gap-4 pb-24 sm:gap-8 sm:pb-0 lg:flex-row lg:items-start">
        <Image
          src={song.cover.url}
          alt={song.cover.alt}
          height={song.cover.height}
          width={song.cover.width}
          placeholder="blur"
          blurDataURL={song.cover.blurUpThumb}
          className="h-full w-full rounded-md shadow-lg lg:max-w-[30rem]"
        />
        {/* Song info container */}
        <div className="flex w-full flex-col justify-between gap-4">
          <div className="flex w-full flex-col gap-2">
            <h1 className="text-4xl font-semibold">{song.title}</h1>
            <p className="text-neutral-400">
              {song.author ? song.author : 'Original'}
            </p>
            {song.description && (
              <ReactMarkdown className="prose pt-2 text-neutral-300 prose-headings:mb-2 prose-h2:text-white prose-p:mb-2 prose-p:mt-0 prose-a:font-semibold prose-a:text-white">
                {song.description}
              </ReactMarkdown>
            )}
            {/* Extra info */}
            <div className="flex flex-col gap-2 pt-2">
              {/*
            <div className="flex flex-row items-center gap-2 pt-2">
              <span className="font-icons text-2xl">equalizer</span>
              <p className="text-lg">Additional informations</p>
              </div>*/}
              <div className="flex flex-row items-center gap-2">
                <span className="font-icons text-2xl">calendar_month</span>
                <p className="text-lg">
                  {new Intl.DateTimeFormat('en-GB').format(
                    new Date(song.uploadedAt)
                  )}
                </p>
              </div>
              {song.bpm && (
                <div className="flex flex-row items-center gap-2">
                  <span className="font-icons text-2xl">speed</span>
                  <p className="text-lg">{`${song.bpm} BPM`}</p>
                </div>
              )}
              {song.genre && (
                <div className="flex flex-row items-center gap-2">
                  <span className="font-icons text-2xl">queue_music</span>
                  <p className="text-lg">{song.genre.name}</p>
                </div>
              )}
            </div>
          </div>
          {/* Listen button + progress bar */}
          <div className="fixed bottom-0 left-0 flex w-full flex-col justify-center bg-gradient-to-b from-transparent via-neutral-900 to-neutral-900 pt-4 sm:static sm:pt-0">
            <div className="container w-full p-4 sm:p-0">
              <Link href={`/songs/${params.slug}/listen`}>
                <div className="w-full rounded-md bg-white px-4 py-2 text-center text-lg font-bold text-neutral-900">
                  Listen
                </div>
              </Link>
            </div>
            <Progress />
          </div>
        </div>
      </div>
    </Animate>
  )
}

export default Song
