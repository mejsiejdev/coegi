import type responsiveImage from "./responsiveImage"

type Song = {
  slug: string
  title: string
  author?: string
  cover: {
    responsiveImage: responsiveImage
  }
}

export default Song
