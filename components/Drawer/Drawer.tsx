'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const Drawer = ({
  title,
  children,
  onClose,
}: {
  title: string
  children: React.ReactNode
  onClose?: () => void
}) => {
  const router = useRouter()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed inset-0 z-20 flex h-full w-full items-end justify-center bg-black/50 md:items-center"
    >
      <motion.div
        initial={{ y: 400 }}
        animate={{ y: 0 }}
        exit={{ y: 400 }}
        transition={{ type: 'tween', duration: 0.3 }}
        className="z-20 flex h-min w-full flex-col gap-4 rounded-t-2xl bg-neutral-800 p-4 md:max-w-sm md:rounded-b-2xl"
      >
        <div className="flex w-full flex-row items-center justify-between gap-8">
          <p className="text-2xl">{title}</p>
          <button
            className="w-min font-icons text-3xl text-white"
            title="Close"
            onClick={onClose ? onClose : () => router.back()}
          >
            close
          </button>
        </div>
        {children}
      </motion.div>
    </motion.div>
  )
}

export default Drawer
