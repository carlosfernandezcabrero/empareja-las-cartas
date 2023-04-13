export interface LevelProperties {
  name: string
  timeLeft: number
}

export interface LevelPropertiesWithImages extends LevelProperties {
  images: string[]
  originalImages: string[]
}

export interface IconProps {
  width: string
  height: string
  strokeWidth?: number
}
