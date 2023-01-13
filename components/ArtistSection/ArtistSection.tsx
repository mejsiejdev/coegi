import { motion } from 'framer-motion'
import { Image } from 'react-datocms'
import { FaFacebookF } from 'react-icons/fa'
import { SiApplemusic, SiFacebook, SiInstagram, SiSoundcloud, SiSpotify, SiTwitter, SiYoutube } from 'react-icons/si'
import ReactMarkdown from 'react-markdown'

import type responsiveImage from '../../types/responsiveImage'

type Props = {
  name: string
  description: string
  socials: any
  picture: {
    responsiveImage: responsiveImage
  }
}

const ArtistSection: React.FC<Props> = ({
  name,
  description,
  socials,
  picture,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full xl:w-auto flex flex-col items-center justify-center gap-8 rounded-lg bg-neutral-800 p-4 sm:flex-row sm:items-start xl:flex-col xl:items-center"
    >
      <Image
        data={picture.responsiveImage}
        className="flex-none rounded-full"
      />
      <div className="flex w-full max-w-none flex-col gap-4 text-center sm:text-left xl:text-center xl:w-80">
        <h1 className="text-5xl font-bold italic text-white">
          {name.toUpperCase()}
        </h1>
        <div className="prose prose-sm prose-invert overflow-y-auto">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <div className="flex flex-row gap-2 text-white w-full justify-center sm:justify-start">
          <a
            href={socials.spotify}
            aria-label="Spotify"
            title="Listen on Spotify"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiSpotify className="h-7 w-7" />
          </a>
          <a
            href={socials.soundcloud}
            aria-label="Soundcloud"
            title="Listen on Soundcloud"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiSoundcloud className="h-7 w-7" />
          </a>
          <a
            href={socials.apple}
            aria-label="Apple"
            title="Listen on Apple Music"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiApplemusic className="h-7 w-7" />
          </a>
          <a
            href={socials.youtube}
            aria-label="Youtube"
            title="Listen on Youtube"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiYoutube className="h-7 w-7" />
          </a>
          <a
            href={socials.instagram}
            aria-label="Instagram"
            title="Follow on Instagram"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiInstagram className="h-7 w-7" />
          </a>
          <a
            href={socials.twitter}
            aria-label="Twitter"
            title="Follow on Twitter"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiTwitter className="h-7 w-7" />
          </a>
          <a
            href={socials.twitter}
            aria-label="Twitter"
            title="Follow on Twitter"
            target="_blank"
            className="p-1.5 rounded-md hover:bg-white/25"
            rel="noopener noreferrer"
          >
            <SiFacebook className="h-7 w-7" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ArtistSection
