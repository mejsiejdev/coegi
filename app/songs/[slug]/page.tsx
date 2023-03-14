import { request } from '../../../lib/datocms'
import Image from 'next/image'

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
    <div className="flex h-full w-full flex-col gap-4">
      <Image
        src={song.cover.url}
        alt={song.cover.alt}
        height={song.cover.height}
        width={song.cover.width}
        placeholder="blur"
        blurDataURL={song.cover.blurUpThumb}
        className="rounded-md"
      />
      <p className="text-5xl font-semibold">{song.title}</p>
      <div>
        <p className="text-neutral-300">
          {song.author ? song.author : 'Original'}
        </p>
        <p className="text-sm text-neutral-400">
          Released on:{' '}
          {new Intl.DateTimeFormat('en-GB').format(new Date(song.uploadedAt))}
        </p>
      </div>
      <p className="text-neutral-300">{song.description}</p>
    </div>
  )
}

export default Song
