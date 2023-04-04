import React from 'react'

function ChildOne({ onCountChange, count }) {
    console.log("Child component rendered")
    return (
        <div>
            <h1>Child component</h1>
            Count - {count}
            <button onClick={() => { onCountChange(count - 1) }} >Decrement</button>
        </div>
    )
}

export default ChildOne