import React, { useState } from 'react'
import ChildOne from './ChildOne'


function Parent() {
    const [count, setCount] = useState(0)
    console.log(`Parent component rendered `)
    return (
        <div>
            <h1>Parent component</h1>
            Count - {count}
            <button onClick={() => { setCount(count + 1) }}>Increment</button>
            <hr />
            <ChildOne onCountChange={setCount} count={count} />
        </div>
    )
}

export default Parent