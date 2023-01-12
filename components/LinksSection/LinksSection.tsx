import {
  SiInstagram,
  SiTwitter,
  SiSoundcloud,
  SiYoutube,
  SiTidal,
  SiApple,
} from 'react-icons/si'

import { FaFacebookF } from 'react-icons/fa'

import { MdDownload, MdRadio, MdHeadphones } from 'react-icons/md'
import Spotify from './Spotify/Spotify'

type Props = {
  instagram?: string
  facebook?: string
  twitter?: string
  soundcloud?: string
  spotify?: string
  youtube?: string
  tidal?: string
  apple?: string
  download?: {
    radio: string
    extended?: string
  }
}

const LinksSection: React.FC<Props> = (props) => {
  return (
    <div className="flex w-full flex-col gap-2">
      {props.instagram && (
        <a
          aria-label="Instagram"
          href={props.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-gradient-to-r from-[#FF7A00] to-[#D300C5] fill-white p-2 text-white"
        >
          <SiInstagram className="h-6 w-6"/>
          <p className="font-bold">Follow on Instagram</p>
        </a>
      )}
      {props.facebook && (
        <a
          aria-label="Facebook"
          href={props.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-blue-600 fill-white p-2 text-white"
        >
          <FaFacebookF className="h-6 w-6"/>
          <p className="font-bold">Like on Facebook</p>
        </a>
      )}
      {props.twitter && (
        <a
          aria-label="Twitter"
          href={props.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-sky-500 fill-white p-2 text-white"
        >
          <SiTwitter className="h-7 w-7"/>
          <p className="font-bold">Follow on Twitter</p>
        </a>
      )}
      {props.spotify && (
        <Spotify href={props.spotify} />
      )}
      {props.soundcloud && (
        <a
          aria-label="Soundcloud"
          href={props.soundcloud}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-orange-500 fill-white p-2 text-white"
        >
          <SiSoundcloud className="h-8 w-8" />
          <p className="font-bold">Listen on Soundcloud</p>
        </a>
      )}
      {props.youtube && (
        <a
          aria-label="Youtube"
          href={props.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-red-500 fill-white p-2 text-white"
        >
          <SiYoutube className="h-7 w-7" />
          <p className="font-bold">Listen on Youtube</p>
        </a>
      )}
      {props.tidal && (
        <a
          aria-label="Tidal"
          href={props.tidal}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-neutral-900 fill-white p-2 text-white"
        >
          <SiTidal className="h-7 w-7" />
          <p className="font-bold">Listen on Tidal</p>
        </a>
      )}
      {props.apple && (
        <a
          aria-label="Apple"
          href={props.apple}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-neutral-300 fill-neutral-900 p-2 text-neutral-900"
        >
          <SiApple className="h-6 w-6" />
          <p className="font-bold">Listen on Apple Music</p>
        </a>
      )}
      {props.download &&
        (!props.download.extended ? (
          <a
            aria-label="Download"
            href={props.download.radio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-neutral-700 fill-white p-2 text-white"
          >
            <MdDownload className="h-7 w-7" />
            <p className="font-bold">Download</p>
          </a>
        ) : (
          <>
            <a
              aria-label="Radio Edit Download"
              href={props.download.radio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-yellow-600 fill-white p-2 text-white"
            >
              <MdRadio className="h-7 w-7"/>
              <p className="font-bold">Download the Radio Edit</p>
            </a>
            <a
              aria-label="Extended Edit Download"
              href={props.download.extended}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full flex-row items-center justify-center gap-4 rounded-md bg-violet-700 fill-white p-2 text-white"
            >
              <MdHeadphones className="h-7 w-7"/>
              <p className="font-bold">Download the Extended Mix</p>
            </a>
          </>
        ))}
    </div>
  )
}
export default LinksSection
