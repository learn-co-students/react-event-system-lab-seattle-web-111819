// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

    // STEP 1: add function to print out message when event fires
    inputPassword = () => console.log("Entering password...")

    render() {
        return (
            <div>
                {/* // STEP 2: add an event handler that listens for the keyUp event */}
                <input type="password" onKeyUp={this.inputPassword} />
            </div>
        )
    }
}

export default Keypad