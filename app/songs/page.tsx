import { request } from '../../lib/datocms'
import Image from 'next/image'
import Link from 'next/link'
import Animate from '../../components/Animate'
import { Metadata } from 'next'

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
    songs: allSongs(orderBy: uploadedAt_DESC, filter: {hidden: { eq: false }}) {
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

export const metadata: Metadata = {
  title: "Songs"
}

const Music = async () => {
  const songs = await getMusic()
  return (
    <Animate className="flex flex-col gap-4">
      <div className="flex flex-row items-center gap-2">
        <Link
          href="/"
          className="flex h-full items-center rounded-md transition sm:p-1 sm:hover:bg-neutral-600"
        >
          <span className="font-icons text-2xl font-semibold">
            arrow_back_ios_new
          </span>
        </Link>
        <p className="text-2xl font-semibold">All songs</p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 pb-8 sm:grid-cols-2">
        {songs.map((song, key) => (
          <Link
            href={`/songs/${song.slug}`}
            key={key}
            className="flex w-full flex-row items-start gap-4 rounded-md text-left transition sm:flex-col sm:items-center sm:p-4 sm:text-center sm:hover:bg-neutral-800 lg:flex-row lg:items-start lg:text-left"
          >
            <Image
              src={song.cover.url}
              alt={`${song.author ? song.author : "Coegi"} - ${song.title}`}
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
    </Animate>
  )
}

export default Music
