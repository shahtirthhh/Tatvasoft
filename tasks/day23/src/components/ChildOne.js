import React from 'react'

function ChildOne({ onFNameChange, fname }) {

    console.log("Child one component rendered")

    return (
        <div>
            <h1>Child one  component without memo Displaying First Name</h1>
            <h4>First name - {fname}</h4>
            <input type='text' placeholder='First Name' onChange={(e) => onFNameChange(e.target.value)}></input>
        </div>
    )
}

export default ChildOne