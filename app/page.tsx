import Image from 'next/image'
import Link from 'next/link'
import Animate from '../components/Animate'
import Button from '../components/Button'
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
    songs: allSongs(first: "6", orderBy: uploadedAt_DESC) {
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
      <div className="flex w-full flex-col gap-24">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold">Newest releases</p>
          {newestSongs && <Gallery songs={newestSongs} />}
        </div>
        <div className="flex flex-col items-center">
          <Link href="/songs">
            <Button type="secondary">
              <div className="flex flex-row items-center gap-2">
                <p>See all songs</p>
                <span className="pt-0.5 font-icons text-2xl">east</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </Animate>
  )
}

export default Page
