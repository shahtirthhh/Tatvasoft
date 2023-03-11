import React from 'react'
import contx from './userContext';
function ComB() {
    return (
        <contx.Consumer>
            {(msg) => {
                return <div>component B {msg}</div>
            }}
        </contx.Consumer>
    )
}

export default ComB;