// Code SimplerComponent Here

//  should be a stateless functional component
// should render a div with text "I am just happy"
// should be capable of handling onClick
import React from 'react';
const SimplerComponent = props => <div onClick={props.handleClick}>I am just happy. </div>
export default SimplerComponent;