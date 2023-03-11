import React, { Component } from 'react'

export default class InputRef extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }
    focusInput() {
        this.inputRef.current.focus()
    }
    componentDidMount() {
        this.focusInput();
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef}></input>
                <button>Get focus</button>
            </div>
        )
    }
}
