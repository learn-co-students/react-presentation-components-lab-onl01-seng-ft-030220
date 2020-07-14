// Code SimplerComponent Here
import React from 'react'

const handleClick = (e) => {
  this.props.handleClick()
}

const SimplerComponent = ({handleClick}) => (<div onClick={handleClick}>I am just happy</div>)

export default SimplerComponent
