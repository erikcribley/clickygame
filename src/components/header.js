import React from 'react'

function Header (props) {
  return (
    <div>
      <div> CLICKY KITTY! </div>
      <div> Score: {props.score} | Top Score: {props.topScore} </div>
      <div> {props.prompt} </div>
    </div>
  )
}


export default Header