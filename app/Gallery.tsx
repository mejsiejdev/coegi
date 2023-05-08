'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

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
    }
  }[]
}) => {
  const [index, setIndex] = useState<number>(0)
  return (
    <div className="relative flex h-full w-full flex-row gap-4">
      <div className="absolute left-0 flex w-full flex-col items-center">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-neutral-900 to-transparent">
          <Link
            href={`/songs/${songs[index].slug}`}
            className="flex flex-col items-center gap-8"
          >
            <Image
              src={songs[index].cover.responsiveImage.src}
              alt={songs[index].title}
              width={songs[index].cover.responsiveImage.width}
              height={songs[index].cover.responsiveImage.height}
              className="rounded-md"
            />
            <p className="text-4xl font-semibold">{songs[index].title}</p>
          </Link>
        </div>
      </div>
      {songs.map((song, key) => (
        <Link
          href={`/songs/${song.slug}`}
          key={key}
          className="flex h-full flex-col gap-4"
        >
          <Image
            src={song.cover.responsiveImage.src}
            alt={song.title}
            width={song.cover.responsiveImage.width}
            height={song.cover.responsiveImage.height}
            className="rounded-md"
          />
          <p className="text-center text-2xl font-semibold">{song.title}</p>
        </Link>
      ))}
    </div>
  )
}

export default Gallery
