import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { SiSpotify } from 'react-icons/si'

const Spotify = ({ href }: { href: string }) => {
  const [showEmbed, setShowEmbed] = useState(false)
  const expand = href.includes('/track')
  return (
    <motion.div className="flex flex-col rounded-md bg-green-500">
      <div className="flex items-center justify-end fill-white p-2 text-white">
        {expand && (
          <div className="absolute">
            {showEmbed ? (
              <MdExpandLess
                title="Hide the preview"
                className="my-auto h-7 w-7 cursor-pointer rounded-md p-0.5 hover:bg-white/25"
                onClick={() => setShowEmbed(false)}
              />
            ) : (
              <MdExpandMore
                title="Click to preview"
                className="my-auto h-7 w-7 cursor-pointer rounded-md p-0.5 hover:bg-white/25"
                onClick={() => setShowEmbed(true)}
              />
            )}
          </div>
        )}
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
        {showEmbed && expand && (
          <motion.div
            layout
            className="h-full w-full border-t border-green-600 p-2"
          >
            <motion.iframe
              initial={{ height: 0 }}
              animate={{ height: 152 }}
              exit={{ height: 0 }}
              transition={{ duration: 0.25 }}
              title="Spotify preview"
              scrolling="no"
              className="w-full rounded-sm"
              height="152"
              src={`https://open.spotify.com/embed/track/${
                href.split('/track/')[1].split('?')[0]
              }?utm_source=generator}`}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></motion.iframe>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Spotify
