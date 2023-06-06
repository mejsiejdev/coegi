'use client'

import { useEffect, useState } from 'react'

const Progress = () => {
  // Width
  const [width, setWidth] = useState(0)

  const scrollHeight = () => {
    const el = document.documentElement,
      ScrollTop = el.scrollTop || document.body.scrollTop,
      ScrollHeight = el.scrollHeight || document.body.scrollHeight
    const percent = (ScrollTop / (ScrollHeight - el.clientHeight)) * 100
    // store percentage in state
    setWidth(percent)
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeight)
    return () => window.removeEventListener('scroll', scrollHeight)
  })

  return (
    <div className="h-2 w-full bg-neutral-800 sm:hidden">
      <div className="h-full bg-white" style={{ width: `${width}%` }}></div>
    </div>
  )
}

export default Progress
