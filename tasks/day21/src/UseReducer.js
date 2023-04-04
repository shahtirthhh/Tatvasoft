import React, { useReducer, useEffect } from 'react'

const reducer = (state, action) => {
    switch (action) {
        case 'add': return state + 1
        case 'sub': return state - 1
        case 'mul': return state * 2
        default: return state
    }
}

function UseReducer() {
    const [counter, dispatch] = useReducer(reducer, 0)
    useEffect(() => {
        console.log("Component rendered")
    }, [])
    useEffect(() => {
        console.log("Component re-rendered")
    })
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={() => dispatch('add')} >Add 1</button>
            <button onClick={() => dispatch('sub')} >Subtract  1</button>
            <button onClick={() => dispatch('mul')} >Multiply 2</button>
        </div>
    )
}

export default UseReducer