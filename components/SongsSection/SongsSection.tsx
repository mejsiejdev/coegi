import type SongType from '../../types/song'
import SongTile from './SongTile'

type Props = {
  songs: SongType[]
}

const SongsSection: React.FC<Props> = ({ songs }) => {
  return (
    <div className="grid max-h-full max-w-4xl grid-cols-2 gap-4 overflow-y-auto scroll-smooth scrollbar-hide sm:grid-cols-3 md:grid-cols-4 xl:max-h-screen xl:max-w-3xl">
      {songs.map((song, key) => (
        <SongTile {...song} key={key} />
      ))}
    </div>
  )
}

export default SongsSection
