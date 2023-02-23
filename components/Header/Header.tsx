'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
const Follow = lazy(() => import('./Follow'))

const Header = ({ links }: { links: any }) => {
  const [showFollow, setShowFollow] = useState<boolean>(false)
  return (
    <>
      <header className="container flex w-full flex-row items-center justify-between gap-4 p-4">
        <Image src={Logo} alt="Coegi" className="hidden w-32 sm:block" />
        <div className="flex w-full flex-row items-center justify-around gap-4 sm:w-auto">
          <Link href={'/'} className="font-icons text-4xl" title="Home">
            home
          </Link>
          <Link
            href={'/music'}
            className="font-icons text-4xl text-sky-500"
            title="Music"
          >
            music_note
          </Link>
          <Link
            href={'/achievements'}
            className="font-icons text-4xl text-yellow-500"
            title="Achievements"
          >
            auto_awesome
          </Link>
          <button
            className="font-icons text-4xl text-green-500"
            title="Follow"
            onClick={() => setShowFollow(true)}
          >
            person_add
          </button>
        </div>
      </header>
      <AnimatePresence>
        {showFollow && (
          <Follow links={links} onClose={() => setShowFollow(false)} />
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
