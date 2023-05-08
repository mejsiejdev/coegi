import Image, { StaticImageData } from 'next/image'
import Drawer from '../../../../../components/Drawer'
import { request } from '../../../../../lib/datocms'

// Icon imports
import Spotify from '../../../../../public/images/spotify.svg'
import Soundcloud from '../../../../../public/images/soundcloud.png'
import Apple from '../../../../../public/images/applemusic.svg'
import Tidal from '../../../../../public/images/tidal.png'
import Youtube from '../../../../../public/images/youtube.png'
import Download from '../../../../../public/images/download.svg'
import Radio from '../../../../../public/images/radio.svg'
import Extended from '../../../../../public/images/headphones.svg'

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

const getLinks = async (slug: string) => {
  const query = `query ($slug: SlugFilter) {
    song(filter: {slug: $slug}) {
      links
    }
  }`
  const { song } = await request({
    query: query,
    variables: { slug: { eq: slug } },
  })
  return song.links
}

const Listen = async ({ params }: { params: { slug: string } }) => {
  const links = await getLinks(params.slug)
  return (
    <Drawer title="Listen">
      <div className="flex flex-col gap-2">
        {links.spotify && (
          <PlatformLink
            href={links.spotify}
            src={Spotify}
            name="Spotify"
            title={'Listen on Spotify'}
          />
        )}
        {links.soundcloud && (
          <PlatformLink
            href={links.soundcloud}
            src={Soundcloud}
            name="Soundcloud"
            title={'Listen on Soundcloud'}
          />
        )}
        {links.youtube && (
          <PlatformLink
            href={links.youtube}
            src={Youtube}
            name="Youtube"
            title={'Listen on Youtube'}
          />
        )}
        {links.apple && (
          <PlatformLink
            href={links.apple}
            src={Apple}
            name="Apple Music"
            title={'Listen on Apple Music'}
          />
        )}
        {links.tidal && (
          <PlatformLink
            href={links.tidal}
            src={Tidal}
            name="Tidal"
            title={'Listen on Tidal'}
          />
        )}
        {links.download && (
          <>
            <PlatformLink
              href={links.download.radio}
              src={!links.download.extended ? Download : Radio}
              name={
                !links.download.extended ? 'Download' : 'Download Radio Edit'
              }
              title={
                !links.download.extended ? 'Download' : 'Download Radio Edit'
              }
            />
            {links.download.extended && (
              <PlatformLink
                href={links.download.extended}
                src={Extended}
                name={'Download Extended Mix'}
                title={'Download Extended Mix'}
              />
            )}
          </>
        )}
      </div>
    </Drawer>
  )
}

export default Listen
