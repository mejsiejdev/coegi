'use client'

import { AnimatePresence } from 'framer-motion'

const Template = ({ children }: { children: React.ReactNode }) => {
  return <AnimatePresence>{children}</AnimatePresence>
}
export default Template
