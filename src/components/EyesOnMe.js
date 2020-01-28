// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

    // STEP 1: add functions to print out message when event fires
    focus = () => console.log("Good!")
    blur = () => console.log("Hey! Eyes on me!")

    render() {
        return (
            <div>
            {/* // STEP 2: add an event handler that listens for the focus and blur events */}
                <button onFocus={this.focus} onBlur={this.blur}>
                    Eyes on Me
                </button>
            </div>
        )
    }
}
export default EyesOnMe