import Image, { StaticImageData } from 'next/image'
import Drawer from '../../Drawer'

// Social platforms' logo imports
import Spotify from '../../../public/images/spotify.svg'
import Soundcloud from '../../../public/images/soundcloud.png'
import Instagram from '../../../public/images/instagram.svg'
import Twitter from '../../../public/images/twitter.svg'
import Facebook from '../../../public/images/facebook.png'
import Apple from '../../../public/images/applemusic.svg'

const PlatformLink = ({
  href,
  src,
  name,
  title,
}: {
  href: string
  src: StaticImageData
  name: string
  title: string
}) => (
  <a
    href={href}
    title={title}
    target="_blank"
    referrerPolicy="no-referrer"
    rel="noreferrer"
    className="flex w-full flex-row items-center gap-4 rounded-md border-2 border-neutral-700 px-4 py-2 transition hover:border-neutral-500"
  >
    <Image src={src} alt={name} className="w-8" />
    <p className="text-lg">{name}</p>
  </a>
)

const Follow = ({ links, onClose }: { links: any; onClose: () => void }) => {
  return (
    <Drawer onClose={onClose} title="Listen / Follow">
      <div className="flex w-full flex-col gap-2">
        {links.spotify && (
          <PlatformLink
            src={Spotify}
            href={links.spotify}
            name="Spotify"
            title="Listen to / Follow Coegi on Spotify"
          />
        )}
        {links.apple && (
          <PlatformLink
            src={Apple}
            href={links.apple}
            name="Apple Music"
            title="Listen to Coegi on Apple Music"
          />
        )}
        {links.soundcloud && (
          <PlatformLink
            src={Soundcloud}
            href={links.soundcloud}
            name="Soundcloud"
            title="Listen to / Follow Coegi on Soundcloud"
          />
        )}
        {links.instagram && (
          <PlatformLink
            src={Instagram}
            href={links.instagram}
            name="Instagram"
            title="Follow Coegi (@coegimusic) on Instagram"
          />
        )}
        {links.twitter && (
          <PlatformLink
            src={Twitter}
            href={links.twitter}
            name="Twitter"
            title="Follow Coegi (@CoegiMusic) on Twitter"
          />
        )}
        {links.facebook && (
          <PlatformLink
            src={Facebook}
            href={links.facebook}
            name="Facebook"
            title="Follow Coegi (@CoegiMusic) on Facebook"
          />
        )}
      </div>
    </Drawer>
  )
}

export default Follow
