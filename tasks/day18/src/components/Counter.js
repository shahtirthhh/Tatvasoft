import React, { useReducer } from 'react'

function Counter() {
    const [count, dispatch] = useReducer((state, action) => {
        if (action === '+') {
            state = state + 1;
        }
        return state
    }, 0)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('+')}>Increment</button>
        </div>
    )
}

export default Counter