'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
const Follow = lazy(() => import('./Follow'))
const Menu = lazy(() => import('./Menu'))

const Header = ({ links }: { links: any }) => {
  const [showFollow, setShowFollow] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <>
      <header className="container flex w-full flex-row items-center justify-between gap-4">
        <Image src={Logo} alt="Coegi" className="w-28" />
        <button
          title="Open menu"
          className="flex flex-col items-center justify-center"
          onClick={() => setShowMenu(true)}
        >
          <span className="font-icons text-4xl">menu</span>
        </button>
        <button
          title="Follow"
          className="flex flex-col items-center justify-center"
          onClick={() => setShowFollow(true)}
        >
          <span className="font-icons text-4xl">person_add</span>
        </button>
      </header>
      <AnimatePresence>
        {showFollow && (
          <Follow links={links} onClose={() => setShowFollow(false)} />
        )}
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </AnimatePresence>
    </>
  )
}

export default Header
