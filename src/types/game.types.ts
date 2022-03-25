type PredictionType = 'higher' | 'lower'
type EmojiReaction = 'happy' | 'sad'
type Coordinate = {
  x: number
  y: number
  price: number
}
type Coordinates = Coordinate[]

type Player = {
  id?: string
  username: string
  score: number
}

export type { PredictionType, EmojiReaction, Coordinates, Coordinate, Player }
