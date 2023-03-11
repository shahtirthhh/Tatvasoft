import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    render() {
        console.log("Pure component re-rendered")
        return (
            <h2>{this.props.name}</h2>
        )
    }
}

export default PureComp