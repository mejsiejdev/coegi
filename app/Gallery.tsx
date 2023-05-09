'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Gallery = ({
  songs,
}: {
  songs: {
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
}) => {
  const [index, setIndex] = useState<number>(0)
  const previousIndex = useRef<number>(0)
  useEffect(() => {
    previousIndex.current = index
  }, [index])
  const background = [
    ...songs.slice(index + 1, songs.length),
    ...songs.slice(0, index),
  ]
  return (
    <div className="flex h-full w-full flex-row items-center justify-center gap-4 pt-8">
      <div className="absolute flex w-[120%] flex-row gap-4">
        {[
          ...background.slice(3, 5),
          background[2],
          ...background.slice(0, 2),
        ].map((song) => (
          <motion.div
            initial={{
              x:
                (previousIndex.current < index &&
                  (index === 5 ? previousIndex.current !== 0 : true)) ||
                (previousIndex.current === 5 && index !== 4)
                  ? 300
                  : -300,
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            exit={{
              x:
                (previousIndex.current < index &&
                  (index === 5 ? previousIndex.current !== 0 : true)) ||
                (previousIndex.current === 5 && index !== 4)
                  ? 300
                  : -300,
              opacity: 0,
            }}
            transition={{ type: 'keyframes' }}
            key={song.title + index}
          >
            <Link
              href={`/songs/${song.slug}`}
              className="flex h-full w-full flex-col gap-4"
            >
              <Image
                src={song.cover.responsiveImage.src}
                alt={song.title}
                width={song.cover.responsiveImage.width}
                height={song.cover.responsiveImage.height}
                blurDataURL={song.cover.blurUpThumb}
                placeholder="blur"
                className="select-none rounded-md"
              />
            </Link>
          </motion.div>
        ))}
        <span className="absolute h-full w-full bg-gradient-to-r from-transparent via-black to-transparent" />
      </div>
      <div className="z-10 flex flex-row items-center gap-8">
        <button
          className="font-icons text-5xl"
          onClick={() =>
            setIndex(index - 1 === -1 ? songs.length - 1 : index - 1)
          }
        >
          arrow_back_ios_new
        </button>
        <Link
          href={`/songs/${songs[index].slug}`}
          className="z-10 flex flex-col items-center justify-end gap-8 sm:max-w-[500px]"
        >
          <Image
            src={songs[index].cover.responsiveImage.src}
            alt={songs[index].title}
            width={songs[index].cover.responsiveImage.width}
            height={songs[index].cover.responsiveImage.height}
            blurDataURL={songs[index].cover.blurUpThumb}
            placeholder="blur"
            loading="eager"
            className="rounded-md sm:max-h-[500px] sm:max-w-[500px]"
          />
          <p className="absolute translate-y-16 select-none text-4xl font-semibold">
            {songs[index].title}
          </p>
        </Link>
        <button
          className="font-icons text-5xl"
          onClick={() => setIndex((current) => (current + 1) % songs.length)}
        >
          arrow_forward_ios
        </button>
      </div>
    </div>
  )
}

export default Gallery
