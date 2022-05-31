import { motion } from 'framer-motion'
import { Image } from 'react-datocms'
import Link from 'next/link'
import ReactVisibilitySensor from 'react-visibility-sensor'
import type Song from '../../../types/song'
import { useState } from 'react'

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const SongTile: React.FC<Song> = ({ slug, title, author, cover }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)
  return (
    <ReactVisibilitySensor
      partialVisibility
      onChange={(isVisible) => setIsVisible(isVisible)}
    >
      <Link passHref href={`/songs/${slug}`}>
        <motion.a
          initial={{ opacity: 0 }}
          animate={isVisible ? 'visible' : 'hidden'}
          variants={variants}
          className={
            'h-full w-full truncate rounded-lg bg-gray-800 transition hover:bg-gray-700'
          }
        >
          {isVisible && (
            <div className="grid w-full justify-center">
              <Image
                data={cover.responsiveImage}
                className="flex-none rounded-t-lg object-fill"
              />
            </div>
          )}
          <div className="truncate p-3">
            <p className="truncate text-sm font-bold text-white">{title}</p>
            <p className="truncate text-xs text-gray-300">{author}</p>
          </div>
        </motion.a>
      </Link>
    </ReactVisibilitySensor>
  )
}
export default SongTile
