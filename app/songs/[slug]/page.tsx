import { request } from '../../../lib/datocms'
import Image from 'next/image'
import Listen from './Listen'

const getSong = async (
  slug: string
): Promise<{
  title: string
  description: string
  author?: string
  bpm?: number
  genre: { name: string }
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
    <>
      {/* A side-by-side container for the song image and it's info */}
      <div className="flex w-full flex-row flex-wrap gap-4 sm:gap-8">
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
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-semibold">{song.title}</p>
          <div>
            <p className="text-neutral-300">
              {song.author ? song.author : 'Original'}
            </p>
            <p className="text-sm text-neutral-400">
              Released on:{' '}
              {new Intl.DateTimeFormat('en-GB').format(
                new Date(song.uploadedAt)
              )}
            </p>
          </div>
          <p className="text-neutral-300">{song.description}</p>
          {/* Listen button */}
          <div className="fixed bottom-0 left-0 w-full p-4">
            <Listen />
          </div>
        </div>
      </div>
    </>
  )
}

export default Song
