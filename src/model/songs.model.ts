export const songTargetTypes = ['new', 'top download']
export type SongTargetType = (typeof songTargetTypes)[number]

export interface SongsModel {
  id?: number
  name?: string
  avatar?: string
  author?: string
  url?: string
  SongType?: SongTargetType
}
