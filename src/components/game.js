import React from 'react'
import cats from './catpics'
import Header from './header'
import Body from './body'

class Game extends React.Component {
  state = {
    cats,
    score: 0,
    topScore: 0,
    prompt: 'Click a kitty to begin!'
  }

  componentDidMount(){
    this.setState({
      cats: this.shuffle(cats)
    })
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

  update = (id) => {
    this.shuffle(cats)
    this.setState({
      
    })
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
          {this.state.cats.map(kitty => (
            <Body
              id={kitty.id}
              key={kitty.id}
              src={kitty.src}
              clicked={kitty.clicked}
              update={this.update}
            />
          ))}
        </div>
      </div> 
    )
  }
}

export default Game

//   reset = () => {
//     this.setState({
//       cats: shuffle(cats),
//       score: 0,
//       prompt: 'Bad kitty!'
//     })
//   }

//   score = array => {
//     this.setState({
//       score: array.length
//     })
//   }

//   topScore = () => {
//     if(this.state.score >= this.state.topScore) {
//       return this.setState({
//         topScore: this.state.score +1
//       })
//     }
//   }

//   update = id => {
//     return this.setState({
//       cats: shuffle(cats),
//       score: this.state.score + 1,
//       prompt: "Good Kitty!"
//     })
//   }