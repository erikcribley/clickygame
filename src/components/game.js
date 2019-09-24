import React from 'react'
import cats from './catpics'
import Header from './header'
import Body from './body'

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
    cats,
    score: 0,
    topScore: 0, 
    prompt: 'Click a kitty to begin!'
  } 

  reset = () => {
    this.setState({
      cats: shuffle(cats),
      score: 0,
      prompt: 'Bad kitty!'
    })
  }

  score = array => {
    this.setState({
      score: array.length
    })
  }

  topScore = () => {
    if(this.state.score >= this.state.topScore) {
      return this.setState({
        topScore: this.state.score +1
      })
    }
  }

  update = id => {
    return this.setState({
      cats: shuffle(cats),
      score: this.state.score + 1,
      prompt: "Good Kitty!"
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score} 
          topScore={this.state.topScore} 
          prompt={this.state.prompt} 
        />
        <p> Click on a kitty, but don't click the same kitty more than once! </p>
        <div>
          {this.state.cats.map(kitty => (
            <Body
              id = {kitty.id}
              key = {kitty.id}
              image = {kitty.src}
              clicked = {kitty.clicked}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Game