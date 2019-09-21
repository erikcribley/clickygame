import React from 'react'
import cats from './catpics'

class Game extends React.Component {
  render() {
    return (
      cats.map(({id, src}) => <img key={id} src={src} alt ="kitty kat" />)
    )
  }
} 

export default Game