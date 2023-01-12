import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { SiSpotify } from 'react-icons/si'

const Spotify = ({ href }: { href: string }) => {
  const [showEmbed, setShowEmbed] = useState(true)
  return (
    <motion.div className="flex flex-col rounded-md bg-green-500">
      <div className="flex items-center justify-end fill-white p-2 text-white">
        <div className="absolute">
          {showEmbed ? (
            <MdExpandLess
              className="my-auto h-7 w-7 rounded-md p-0.5 hover:bg-white/25"
              onClick={() => setShowEmbed(false)}
            />
          ) : (
            <MdExpandMore
              className="my-auto h-7 w-7 rounded-md p-0.5 hover:bg-white/25"
              onClick={() => setShowEmbed(true)}
            />
          )}
        </div>
        <a
          aria-label="Listen on Spotify"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4"
        >
          <SiSpotify className="h-6 w-6" />
          <p className="text-sm font-bold">Listen on Spotify</p>
        </a>
      </div>
      <AnimatePresence>
        {showEmbed && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            className="h-full w-full border-t border-green-600 p-2"
          >
            <iframe
              title="Spotify preview"
              className="w-full rounded-sm"
              height={152}
              src={`https://open.spotify.com/embed/track/0ctbsFXYRaFL9zQ2WnTKUY?utm_source=generator}`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Spotify
