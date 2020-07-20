// Code SimplerComponent Here
import React from 'react'

let handleClick = event => {
    this.props.handleClick()
}

let SimplerComponent = ({ handleClick }) => (
    <div onClick={handleClick}> I am just happy</div>
)

export default SimplerComponent
