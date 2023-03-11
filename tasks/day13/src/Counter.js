import React, { useState } from 'react'
function Counter() {
    const [count, setCount] = useState(0)
    const handler = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handler}>Increment</button>
        </div>
    )
}

export default Counter