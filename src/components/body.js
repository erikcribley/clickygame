import React from 'react'

function Body (props) {
  return (
    <div>
      <img src={props.image} alt="kitty kat" onClick={() => props.update(props.id)}/> 
    </div>
  )
}


export default Body