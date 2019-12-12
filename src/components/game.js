import React from 'react'
import cats from './catpics'
import Header from './header'
import Body from './body'

class Game extends React.Component {
  state = {
    score: 0,
    topScore: 0,
    prompt: 'Click a kitty to begin!'
  }

  shuffle = (array) => {
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

  componentDidMount() {
    this.setState({
      cats: this.shuffle(cats)
    })
  }

  topScore = () => {
    if(this.state.score >= this.state.topScore) {
      this.setState({
        topScore: this.state.score +1
      })
    }
  }

  incrementScore = () => {
    if (this.state.score === 8) {
    this.setState({
      score: this.state.score +1, 
      prompt: "You Win!"
    })
    } else {
    this.setState({
      score: this.state.score +1, 
      prompt: "Good Kitty!"
    })
    }
    this.topScore()
  }

  reset = () => {
    this.setState({
      prompt: "Bad Kitty!",
      score: 0,
    })
    cats.map((kitty) => {
      kitty.clicked = false
      return cats
    })
  }

  update = (id) => {
    cats.map((kitty) => {
      if (id === kitty.id && kitty.clicked === false) {
        this.incrementScore()
        kitty.clicked = true
      } else if (id === kitty.id && kitty.clicked === true) {
        this.reset()
      } 
      return cats
      })
    this.shuffle(cats)
  }

  render () {
    return (
      <div className="App">
        <Header 
          score = {this.state.score}
          topScore = {this.state.topScore}
          prompt = {this.state.prompt}
        />
        <p> Click on a kitty, but don't click on the same kitty more than once! </p>
        <div>
          {cats.map(kitty => (
            <Body
              id={kitty.id}
              key={kitty.id}
              src={kitty.src}
              update={this.update}
            />
          ))}
        </div>
      </div> 
    )
  }
}

export default Game
