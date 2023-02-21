import Image from 'next/image'
import Link from 'next/link'
import GenreTag from '../components/GenreTag'
import { request } from '../lib/datocms'

const getNewestSong = async () => {
  const query = `query Home {
    song(orderBy: [uploadedAt_DESC]) {
      slug
      title
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
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
      }
    }
  }`
  const { song } = await request({ query: query })
  return song
}

const Page = async () => {
  const newestSong = await getNewestSong()
  console.log(newestSong)
  return (
    <div className="flex w-full flex-col gap-4 p-4">
      <p>Latest release</p>
      <Image
        src={newestSong.cover.responsiveImage.src}
        width={newestSong.cover.responsiveImage.width}
        height={newestSong.cover.responsiveImage.height}
        alt={newestSong.cover.responsiveImage.alt}
        className="rounded-md"
      />
      <div className="flex w-full flex-row justify-between gap-4">
        <p className="text-5xl">{newestSong.title}</p>
        <GenreTag genre={newestSong.genre.name} />
      </div>
      <Link
        href={`/songs/${newestSong.slug}`}
        className="flex w-full flex-col items-center justify-center rounded-md bg-white px-4 py-1 text-lg font-semibold text-neutral-800"
      >
        Listen now
      </Link>
    </div>
  )
}

export default Page
