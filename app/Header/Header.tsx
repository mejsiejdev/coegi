'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Menu from './Menu'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <>
      <header className="flex w-full flex-row items-center justify-between gap-4 p-4">
        <button
          className="font-icons text-3xl text-white"
          title="Click to open the menu"
          onClick={() => setShowMenu(true)}
        >
          menu
        </button>
        <Image src={Logo} alt="Coegi" className="w-28" />
        <button className="visible font-icons text-3xl text-white">
          person_add
        </button>
      </header>
      <AnimatePresence>
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
      </AnimatePresence>
    </>
  )
}

export default Header
