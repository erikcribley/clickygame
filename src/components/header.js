import React from 'react'
import './style.css'

function Header (props) {
  return (
    <div className="header">
      <div className="title"> CLICKY KITTY! </div>
      <div className="scores"> Score: {props.score} | Top Score: {props.topScore} </div>
      <div className="prompt"> {props.prompt} </div>
    </div>
  )
}

export default Header
