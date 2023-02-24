'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Follow = lazy(() => import('./Follow'))

const Header = ({ links }: { links: any }) => {
  const [showFollow, setShowFollow] = useState<boolean>(false)
  const pathname = usePathname()
  return (
    <>
      <header className="container flex w-full flex-row items-center justify-between gap-4 p-4">
        <Image src={Logo} alt="Coegi" className="hidden w-32 sm:block" />
        <div className="flex w-full flex-row items-center justify-around gap-4 sm:w-auto">
          <Link
            href={'/'}
            className={`flex w-full flex-col items-center gap-0 rounded-md p-1 sm:w-auto sm:flex-row sm:gap-2 sm:pl-2 sm:pr-3 ${
              pathname === '/'
                ? 'bg-neutral-700'
                : 'transition hover:bg-neutral-700'
            }`}
            title="Home"
          >
            <span className="font-icons text-4xl">home</span>
            <p className="text-sm font-semibold md:text-lg">Home</p>
          </Link>
          <Link
            href={'/music'}
            className={`flex w-full flex-col items-center gap-0 rounded-md p-1 text-sky-500 sm:w-auto sm:flex-row sm:gap-2 sm:pl-2 sm:pr-3 ${
              pathname === '/music'
                ? 'bg-neutral-700'
                : 'transition hover:bg-neutral-700'
            }`}
            title="Music"
          >
            <span className="font-icons text-4xl">music_note</span>
            <p className="text-sm font-semibold md:text-lg">Music</p>
          </Link>
          <Link
            href={'/about-me'}
            className={`flex w-full flex-col items-center gap-0 rounded-md p-1 text-yellow-500 sm:w-auto sm:flex-row sm:gap-2 sm:pl-2 sm:pr-3 ${
              pathname === '/about-me'
                ? 'bg-neutral-700'
                : 'transition hover:bg-neutral-700'
            }`}
            title="About me"
          >
            <span className="font-icons text-4xl">person_search</span>
            <p className="text-sm font-semibold md:text-lg">About Me</p>
          </Link>
          <button
            className="flex w-full flex-col items-center gap-0 rounded-md p-1 text-green-500 transition hover:bg-neutral-700 sm:w-auto sm:flex-row sm:gap-2 sm:pl-2 sm:pr-3"
            title="Follow"
            onClick={() => setShowFollow(true)}
          >
            <span className="font-icons text-4xl">person_add</span>
            <p className="text-sm font-semibold md:text-lg">Follow</p>
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
