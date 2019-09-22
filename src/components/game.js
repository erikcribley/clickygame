import React from 'react'
import cats from './catpics'

const shuffle = (array) => {
  let currentIndex = array.length, temporaryValue, randomIndex
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -=1
      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }
    return array
}

class Game extends React.Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
    shuffle(cats)
  }
  
  render() {
    return (
      cats.map(({id, src}) => <img key={id} src={src} alt ="kitty kat" onClick={this.handleClick} />)
    )
  }
}

export default Game