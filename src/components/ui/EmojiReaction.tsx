import React from 'react'
import { EmojiReaction as EmojiReactionType } from 'src/types/game.types'

interface Props {
  reaction: EmojiReactionType
}

const EmojiReaction: React.FC<Props> = ({ reaction }) => {
  return (
    <div className="-mb-10">
      {reaction === 'happy' ? (
        <div className="emoji emoji--yay  scale-75">
          <div className="emoji__face">
            <div className="emoji__eyebrows">
              <div className="emoji__mouth"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="emoji emoji--sad scale-75">
          <div className="emoji__face">
            <div className="emoji__eyebrows">
              <div className="emoji__eyes">
                <div className="emoji__mouth"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EmojiReaction
