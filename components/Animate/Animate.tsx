'use client'

import { motion } from 'framer-motion'

const Animate = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className={`w-full ${className}`}
  >
    {children}
  </motion.div>
)
export default Animate
