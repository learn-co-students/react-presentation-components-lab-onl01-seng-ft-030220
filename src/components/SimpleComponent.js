// Code SimpleComponent Here

// has state
// has state property `mood`
// default `mood` state should be "happy"
// default "happy" state should be accurately rendered
//when clicked the div should toggle the state to "sad"
// after click, "sad" state should be accurately rendered





import React, { Component } from 'react';
class SimpleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mood: "happy"
        };
    }
    // when clicked, the component's mood should toggle between happy and sad states.
    handleClick = () => {

        this.setState({ mood: "sad" });
    }

    render() {
        return (
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}


export default SimpleComponent;