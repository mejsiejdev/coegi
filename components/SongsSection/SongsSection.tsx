import Link from 'next/link'
import { Image } from 'react-datocms'
import type SongType from '../../types/song'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  songs: SongType[]
}

const SongsSection: React.FC<Props> = ({ songs }) => {
  const [displayedSongs, setDisplayedSongs] = useState<SongType[]>([songs[0]])

  if (displayedSongs.length !== songs.length) {
    setTimeout(
      () =>
        setDisplayedSongs([
          ...displayedSongs,
          songs[displayedSongs.length],
        ]),
      150
    )
  }

  return (
    <div className="grid max-h-full xl:max-h-screen max-w-4xl xl:max-w-3xl grid-cols-2 gap-4 overflow-y-auto scroll-smooth bg-gray-900 pb-8 pt-0 scrollbar-hide sm:grid-cols-3 md:grid-cols-4 xl:pt-8">
      {/*
        <div className="col-span-2 flex animate-pulse select-none flex-col items-center justify-center">
          <p className="text-stone-500">Scroll down to see more</p>
          <MdExpandMore className="fill-stone-500" />
        </div>
      */}
      <AnimatePresence>
        {displayedSongs.map((song) => (
          <Link passHref href={`/songs/${song.slug}`} key={song.slug}>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full truncate rounded-lg bg-gray-800 transition hover:bg-gray-700"
            >
              <div className="grid w-full justify-center">
                <Image
                  data={song.cover.responsiveImage}
                  className="flex-none rounded-t-lg object-fill"
                />
              </div>
              <div className="truncate p-3">
                <p className="truncate text-sm font-bold text-white">
                  {song.title}
                </p>
                <p className="truncate text-xs text-gray-300">{song.author}</p>
              </div>
            </motion.a>
          </Link>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SongsSection
