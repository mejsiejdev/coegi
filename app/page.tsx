import { Suspense } from 'react'
import Animate from '../components/Animate'
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
      blurUpThumb: string
    }
  }[]
> => {
  const query = `{
    songs: allSongs(first: "6", orderBy: uploadedAt_DESC, filter: {hidden: { eq: false }}) {
      slug
      title
      cover {
        responsiveImage(imgixParams: {fit: crop, w: 500, h: 500, auto: format}) {
          src
          width
          height
        }
        blurUpThumb
      }
    }
  }`
  const { songs } = await request({ query: query })
  return songs
}

const Page = async () => {
  const newestSongs = await getNewestSongs()
  return (
    <Animate>
      <div className="flex w-full flex-col gap-8">
        <Suspense fallback={<p className="text-4xl text-white">Loading...</p>}>
          <Gallery songs={newestSongs} /> 
        </Suspense>
      </div>
    </Animate>
  )
}

export default Page
