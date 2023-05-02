'use client'

import { AnimatePresence } from 'framer-motion'
import { lazy, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
const Drawer = lazy(() => import('../../../components/Drawer'))

// Social platforms' logo imports
import Spotify from '../../../public/images/spotify.svg'
import Soundcloud from '../../../public/images/soundcloud.png'
import Instagram from '../../../public/images/instagram.svg'
import Twitter from '../../../public/images/twitter.svg'
import Facebook from '../../../public/images/facebook.png'
import Apple from '../../../public/images/applemusic.svg'

const PlatformLink = ({
  href,
  src,
  name,
  title,
}: {
  href: string
  src: StaticImageData
  name: string
  title: string
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    referrerPolicy="no-referrer"
    rel="noreferrer"
    className="flex w-full flex-row items-center gap-4 rounded-md border-2 border-neutral-700 px-4 py-2 transition hover:border-neutral-500"
  >
    <Image src={src} alt={name} className="w-8" />
    <p className="text-lg">{name}</p>
  </a>
)

const Listen = () => {
  const [show, setShow] = useState<boolean>(false)
  return (
    <>
      <button
        className="w-full rounded-md bg-white px-4 py-2 text-lg font-bold text-neutral-900"
        onClick={() => setShow(true)}
      >
        Listen
      </button>
      <AnimatePresence>
        {show && (
          <Drawer title="Listen" onClose={() => setShow(false)}>
            <p>bruh</p>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  )
}

export default Listen
