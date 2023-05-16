'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const IconLink = ({
  href,
  name,
  icon,
  title,
}: {
  href: string
  name: string
  icon: string
  title: string
}) => {
  const pathname = usePathname()
  return (
    <Link
      href={href}
      title={title}
      className={`${
        pathname === href ? 'bg-neutral-700' : 'bg-transparent'
      } flex w-full flex-row items-center gap-4 rounded-md border-2 border-neutral-700 px-4 py-2 transition hover:border-neutral-500`}
    >
      <div className="flex flex-col items-center justify-center">
        <span className="font-icons text-4xl">{icon}</span>
      </div>
      <p className="text-lg">{name}</p>
    </Link>
  )
}

export default IconLink
