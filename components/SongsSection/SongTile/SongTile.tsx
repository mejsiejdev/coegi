import { Image } from 'react-datocms'
import Link from 'next/link'
import type Song from '../../../types/song'

const SongTile: React.FC<Song> = ({ slug, title, author, cover }) => {
  return (
    <Link
      href={`/songs/${slug}`}
      className="group h-full w-full truncate rounded-lg transition"
    >
      <Image
        data={cover.responsiveImage}
        layout="responsive"
        className="flex-none rounded-t-lg object-contain"
      />
      <div className="h-full truncate text-center w-full rounded-b-md bg-neutral-800 p-4 transition group-hover:bg-neutral-700">
        <p className="truncate text-sm font-bold italic text-white">
          {title.toUpperCase()}
        </p>
        <p className="truncate text-xs text-gray-300">{author}</p>
      </div>
    </Link>
  )
}
export default SongTile
