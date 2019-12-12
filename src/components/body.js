import React from 'react'

function Body (props) {
  return (
    <div>
      <img src={props.src} alt="kitty kat" onClick={() => props.update(props.id, props.clicked)}/> 
    </div>
  )
}

export default Body