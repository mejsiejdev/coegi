import { motion } from 'framer-motion'
import Link from 'next/link'

const MenuLink = ({
  href,
  icon,
  name,
}: {
  href: string
  icon: string
  name: string
}) => (
  <Link
    href={href}
    className="flex w-full flex-row items-center justify-start gap-4 rounded-r-md py-2 pl-4 pr-4 text-white hover:bg-neutral-700"
  >
    <span className="font-icons text-3xl">{icon}</span>
    <p className="text-2xl">{name}</p>
  </Link>
)

const Menu = ({ onClose }: { onClose: () => void }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="absolute flex h-full min-h-screen w-full bg-black/50"
  >
    <motion.div
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      exit={{ x: -300 }}
      transition={{ type: 'tween' }}
      className="flex h-full max-h-screen flex-col justify-between gap-8 bg-neutral-800 py-4 pr-4"
    >
      <div className="flex flex-col gap-4">
        <button
          className="w-min pl-4 font-icons text-3xl text-white"
          title="Close the menu"
          onClick={onClose}
        >
          close
        </button>
        <div className="flex flex-col gap-2">
          <MenuLink href="/music" icon="music_note" name="Music" />
          <MenuLink href="/about" icon="person" name="About Me" />
        </div>
      </div>
      <div className="w-full pl-4">
        <button className="w-full rounded-md bg-white px-4 py-2 text-lg font-bold text-neutral-800">
          Follow
        </button>
      </div>
    </motion.div>
  </motion.div>
)

export default Menu
