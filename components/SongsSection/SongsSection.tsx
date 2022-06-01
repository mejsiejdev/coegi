import type SongType from '../../types/song'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import SongTile from './SongTile'

type Props = {
  songs: SongType[]
}

const SongsSection: React.FC<Props> = ({ songs }) => {
  const [displayedSongs, setDisplayedSongs] = useState<SongType[]>([songs[0]])

  if (displayedSongs.length !== songs.length) {
    setTimeout(
      () =>
        setDisplayedSongs([...displayedSongs, songs[displayedSongs.length]]),
      150
    )
  }

  return (
    <div className="grid max-h-full max-w-4xl grid-cols-2 gap-4 overflow-y-auto scroll-smooth bg-gray-900 pb-8 pt-0 scrollbar-hide sm:grid-cols-3 md:grid-cols-4 xl:max-h-screen xl:max-w-3xl xl:pt-8">
      {/*
        <div className="col-span-2 flex animate-pulse select-none flex-col items-center justify-center">
          <p className="text-stone-500">Scroll down to see more</p>
          <MdExpandMore className="fill-stone-500" />
        </div>
      */}
      <AnimatePresence>
        {displayedSongs.map((song, key) => (
          <SongTile {...song} key={key}/>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SongsSection
