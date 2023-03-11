import React, { Component } from 'react'
import InputRef from './InputRef'
export default class extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    render() {
        return (
            <div>
                <InputRef parent={this.componentRef} />
            </div>
        )
    }
}
