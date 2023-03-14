import Drawer from '../../Drawer'
import IconLink from './IconLink'

const Menu = ({ onClose }: { onClose: () => void }) => {
  return (
    <Drawer onClose={onClose} title="Menu">
      <div className="flex w-full flex-col gap-2">
        <IconLink icon="home" href={'/'} name="Home" title="Go to home" />
        <IconLink
          icon="music_note"
          href={'/songs'}
          name="Songs"
          title="Go to songs"
        />
        <IconLink
          icon="person_search"
          href={'/about'}
          name="About Me"
          title="Read about me"
        />
      </div>
    </Drawer>
  )
}

export default Menu
