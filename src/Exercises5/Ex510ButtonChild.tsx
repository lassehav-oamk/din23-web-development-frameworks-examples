import React from 'react'

export default function Ex510ButtonChild( { onButtonClick, text } ) {
  return (
    <div>
        <button onClick={ onButtonClick }>{ text }</button>
    </div>
  )
}
