import { request } from '../../../lib/datocms'
import Image from 'next/image'
import Listen from './Listen'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

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
const Song = async ({ params }: { params: { slug: string } }) => {
  const song = await getSong(params.slug)
  return (
    <div className="flex flex-col gap-4">
      {/* A side-by-side container for the song image and it's info */}
      <div className="flex w-full flex-row flex-wrap gap-4 pb-20 sm:gap-8">
        <Image
          src={song.cover.url}
          alt={song.cover.alt}
          height={song.cover.height}
          width={song.cover.width}
          placeholder="blur"
          blurDataURL={song.cover.blurUpThumb}
          className="rounded-md shadow-lg"
        />
        {/* Song info container */}
        <div className="flex w-full flex-col gap-2">
          <p className="text-4xl font-semibold">{song.title}</p>
          <p className="text-neutral-400">
            {song.author ? song.author : 'Original'}
          </p>
          {song.description && (
            <ReactMarkdown className="text-neutral-300">
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
          {/* Listen button */}
          <div className="fixed bottom-0 left-0 flex w-full justify-center bg-gradient-to-b from-transparent via-neutral-900  to-neutral-900 pt-4">
            <Listen links={song.links} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Song