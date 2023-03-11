import React, { Component } from 'react'

class RenderProps extends Component {
    render() {
        return (
            <div>{this.props.render()}</div>
        )
    }
}

export default RenderProps