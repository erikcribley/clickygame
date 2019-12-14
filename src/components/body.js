import React from 'react'
import './style.css'

function Body (props) {
  return (
    <div className="pics">
      <img src={props.src} alt="kitty kat" onClick={() => props.update(props.id)}/> 
    </div>
  )
}

export default Body
