import React from 'react'

class Header extends React.Component {
  state = {
    count: 0
  }

  handleIncrement = () => {
    this.setState({ count: this.count + 1})
  }

  render () {
    return (
      <div>
        <p> Score: {this.state.count} </p>
        <h1> CLICK! CLICK! CLICK!</h1>
      </div>
    )
  }
}

export default Header