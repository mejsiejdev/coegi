import { motion } from 'framer-motion'
import { Image } from 'react-datocms'
import ReactMarkdown from 'react-markdown'

import type responsiveImage from '../../types/responsiveImage'

import LinksSection from '../LinksSection'

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
      className="my-8 flex flex-col items-center justify-center gap-8 rounded-lg bg-gray-800 p-6 sm:flex-row sm:items-start xl:flex-col xl:items-center"
    >
      <Image
        data={picture.responsiveImage}
        className="flex-none rounded-full"
      />
      <div className="flex w-full max-w-none flex-col gap-4 xl:w-80">
        <h1 className="flex-none text-4xl text-white">
          <span className="mr-2 inline-block origin-bottom-right animate-wave select-none">
            👋
          </span>
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text font-bold text-transparent">
            {name}!
          </span>
        </h1>
        <div className="prose prose-sm prose-invert overflow-y-auto">
          <ReactMarkdown>{description}</ReactMarkdown>
        </div>
        <LinksSection {...socials} />
      </div>
    </motion.div>
  )
}

export default ArtistSection
