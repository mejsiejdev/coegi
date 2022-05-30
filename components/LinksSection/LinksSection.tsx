import styles from './LinksSection.module.css'

import {
  SiInstagram,
  SiTwitter,
  SiSoundcloud,
  SiSpotify,
  SiYoutube,
  SiTidal,
  SiApple,
} from 'react-icons/si'

import { FaFacebookF } from 'react-icons/fa'

import { MdDownload, MdRadio, MdHeadphones } from 'react-icons/md'

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
    <div className="flex w-full flex-none flex-row items-center justify-start gap-2">
      {props.instagram && (
        <a
          aria-label="Instagram"
          href={props.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiInstagram className={styles.instagram} />
        </a>
      )}
      {props.facebook && (
        <a
          aria-label="Facebook"
          href={props.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <FaFacebookF className={styles.facebook} />
        </a>
      )}
      {props.twitter && (
        <a
          aria-label="Twitter"
          href={props.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiTwitter className={styles.twitter} />
        </a>
      )}
      {props.spotify && (
        <a
          aria-label="Spotify"
          href={props.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiSpotify className={styles.spotify} />
        </a>
      )}
      {props.soundcloud && (
        <a
          aria-label="Soundcloud"
          href={props.soundcloud}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiSoundcloud className={styles.soundcloud} />
        </a>
      )}
      {props.youtube && (
        <a
          aria-label="Youtube"
          href={props.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiYoutube className={styles.youtube} />
        </a>
      )}
      {props.tidal && (
        <a
          aria-label="Tidal"
          href={props.tidal}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiTidal className={styles.tidal} />
        </a>
      )}
      {props.apple && (
        <a
          aria-label="Apple"
          href={props.apple}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <SiApple className={styles.apple} />
        </a>
      )}
      {props.download &&
        (!props.download.extended ? (
          <a
            aria-label="Download"
            href={props.download.radio}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <MdDownload className={styles.link} />
          </a>
        ) : (
          <>
            <a
              aria-label="Radio Edit Download"
              href={props.download.radio}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MdRadio className={styles.link} />
            </a>
            <a
              aria-label="Extended Edit Download"
              href={props.download.extended}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <MdHeadphones className={styles.link} />
            </a>
          </>
        ))}
    </div>
  )
}
export default LinksSection
