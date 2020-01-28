// Code EyesOnMe Component Here
import React, {Component} from 'react'

export default class EyesOnMe extends Component {

    focusHandler = () => {
        console.log('Good!')
    }

    blurHandler = () => {
        console.log('Hey! Eyes on me!')
    }

    render() {
    // console.log("Eyes on Me")
    return (
        <button onFocus={this.focusHandler} onBlur={this.blurHandler}>
           X
        </button>
    )
    }
}