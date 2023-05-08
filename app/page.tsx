import Image from 'next/image'
import Link from 'next/link'
import { request } from '../lib/datocms'
import Gallery from './Gallery'

const getNewestSongs = async (): Promise<
  {
    slug: string
    title: string
    cover: {
      responsiveImage: {
        src: string
        width: number
        height: number
      }
    }
  }[]
> => {
  const query = `{
    songs: allSongs(first: "5", orderBy: uploadedAt_DESC) {
      slug
      title
      cover {
        responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
          src
          width
          height
        }
      }
    }
  }`
  const { songs } = await request({ query: query })
  return songs
}

const Page = async () => {
  const newestSongs = await getNewestSongs()
  console.log('newestSongs: ', newestSongs)
  return <div>{newestSongs && <Gallery songs={newestSongs} />}</div>
}

export default Page
