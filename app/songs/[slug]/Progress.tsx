'use client'

import { useEffect, useState } from 'react'

const Progress = () => {
  // Width
  const [width, setWidth] = useState(0)

  const scrollHeight = () => {
    const currentProgress = window.scrollY
    const scrollHeight = document.body.scrollHeight - window.innerHeight
    setWidth((currentProgress / scrollHeight) * 100)
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
