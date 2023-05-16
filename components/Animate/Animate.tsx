'use client'

import { motion } from 'framer-motion'

const Animate = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="w-full"
  >
    {children}
  </motion.div>
)
export default Animate
