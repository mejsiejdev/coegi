'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Menu from './Menu'
import Follow from './Follow'

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const [showFollow, setShowFollow] = useState<boolean>(false)
  return (
    <>
      <header className="container flex w-full flex-row items-center justify-between gap-4 p-4">
        <button
          className="font-icons text-3xl text-white"
          title="Click to open the menu"
          onClick={() => setShowMenu(true)}
        >
          menu
        </button>
        <Image src={Logo} alt="Coegi" className="w-28" />
        <button
          className="visible font-icons text-3xl text-white"
          title="Follow"
          onClick={() => setShowFollow(true)}
        >
          person_add
        </button>
      </header>
      <AnimatePresence>
        {showMenu && <Menu onClose={() => setShowMenu(false)} />}
        {showFollow && <Follow onClose={() => setShowFollow(false)} />}
      </AnimatePresence>
    </>
  )
}

export default Header
