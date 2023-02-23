import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import GenreTag from '../components/GenreTag'
import { request } from '../lib/datocms'

const getNewestSong = async () => {
  const query = `query Home {
    song(orderBy: [uploadedAt_DESC]) {
      slug
      title
      description
      genre {
        name
      }
      cover {
        responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
          src
          width
          height
          alt
          title
        }
      }
    }
  }`
  const { song } = await request({ query: query })
  return song
}

const Page = async () => {
  const newestSong = await getNewestSong()
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <p className="text-lg">Latest release</p>
      <div className="flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 md:items-start lg:flex lg:flex-row">
        <Image
          src={newestSong.cover.responsiveImage.src}
          width={newestSong.cover.responsiveImage.width}
          height={newestSong.cover.responsiveImage.height}
          alt={newestSong.cover.responsiveImage.alt}
          className="rounded-md"
        />
        <div className="flex h-full w-full flex-col justify-between gap-4">
          <div className="flex flex-col gap-4">
            <div className="flex w-full flex-row justify-between gap-4">
              <p className="text-5xl">{newestSong.title}</p>
              <GenreTag genre={newestSong.genre.name} />
            </div>
            <ReactMarkdown className="hidden flex-col gap-4 md:flex">
              {newestSong.description}
            </ReactMarkdown>
          </div>
          <div className="flex flex-col gap-4">
            <Link
              href={`/songs/${newestSong.slug}`}
              className="flex w-full flex-col items-center justify-center rounded-md bg-white px-4 py-2 text-lg font-semibold text-neutral-800"
            >
              Listen now
            </Link>
            <Link
              href={`/songs/${newestSong.slug}`}
              className="flex w-full flex-row items-center justify-center rounded-md border-2 border-white px-4 py-2 text-lg font-semibold"
            >
              See all songs
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
