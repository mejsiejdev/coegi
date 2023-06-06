'use client'

import Logo from '../../public/images/coegi.svg'
import Image from 'next/image'
import { lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Button from '../Button'
import { usePathname } from 'next/navigation'
const Follow = lazy(() => import('./Follow'))
const Menu = lazy(() => import('./Menu'))

const Header = ({ links }: { links: any }) => {
  const pathname = usePathname()
  const [showFollow, setShowFollow] = useState<boolean>(false)
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <>
      <header className="container flex w-full select-none flex-row items-center justify-between gap-4 pb-8">
        <Link href="/">
          <Image src={Logo} alt="Coegi" className="w-28" priority />
        </Link>
        {/* Desktop links */}
        <div className="hidden flex-row gap-4 sm:flex">
          <Link href="/songs">
            <Button slim type="tertiary" highlight={pathname.includes('songs')}>
              Songs
            </Button>
          </Link>
          <a
            target={'_blank'}
            rel={'noreferrer'}
            href="https://coegimusic.gumroad.com/"
          >
            <Button slim type="tertiary">
              FLPs
            </Button>
          </a>
          <Button slim onClick={() => setShowFollow(true)}>
            Follow
          </Button>
        </div>
        {/* Mobile icons */}
        <button
          title="Follow"
          className="flex flex-col items-center justify-center sm:hidden"
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
