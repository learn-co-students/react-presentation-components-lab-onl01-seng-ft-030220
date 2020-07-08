import React, { Component } from 'react';

class SimpleComponent extends Component {
    constructor(props) {
      super(props);
    
      this.state = {
          mood: "happy"
      };
    }
    
    handleClick = () => {
        let emotion //declaring variable emotion
        this.state.mood === "happy" ? emotion = "sad" : emotion = "happy"
        this.setState({
          mood: emotion
      })
    }
        
    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent;