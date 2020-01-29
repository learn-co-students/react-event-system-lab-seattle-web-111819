// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {

    // STEP 1: add function to print out message when event fires
    handleInputPassword = () => console.log("Entering password...")

    render() {
        return (
            <div>
                {/* // STEP 2: add an event handler that listens for the keyUp event */}
                <input type="password" onKeyUp={this.handleInputPassword} />
            </div>
        )
    }
}

export default Keypad