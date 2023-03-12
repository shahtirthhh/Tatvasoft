import React, { useContext, useReducer } from 'react'
import { valContext } from '../App'
function CounterTwo() {
    const value = useContext(valContext)

    const [count, dispatch] = useReducer((state, action) => {
        if (action === "+") {
            return state + 1;
        }
    }, value)

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch('+')}>Increment</button>
        </div>
    )
}

export default CounterTwo