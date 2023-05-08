import { request } from '../../lib/datocms'
import Image from 'next/image'
import Tag from '../../components/Tag'
import Link from 'next/link'

const getMusic = async (): Promise<
  {
    title: string
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
  }[]
> => {
  const query = `{
    songs: allSongs(orderBy: uploadedAt_DESC) {
      slug
      title
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
  const { songs } = await request({ query: query })
  return songs
}

const Music = async () => {
  const songs = await getMusic()
  return (
    <div className="grid w-full grid-cols-1 gap-4 pb-8 sm:grid-cols-2">
      {songs.map((song, key) => (
        <Link
          href={`/songs/${song.slug}`}
          key={key}
          className="flex w-full flex-row gap-4 rounded-md transition hover:bg-neutral-800 sm:p-4"
        >
          <Image
            src={song.cover.url}
            alt={song.cover.alt}
            height={song.cover.height}
            width={song.cover.width}
            placeholder="blur"
            blurDataURL={song.cover.blurUpThumb}
            className="max-h-[8rem] max-w-[8rem] rounded-md sm:max-h-[12rem] sm:max-w-[12rem]"
          />
          <div className="flex w-full flex-col justify-center sm:justify-start">
            <p className="text-2xl font-semibold">{song.title}</p>
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
        </Link>
      ))}
    </div>
  )
}

export default Music
