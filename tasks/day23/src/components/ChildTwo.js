import React from 'react'

function ChildTwo({ onLNameChange, lname }) {
    console.log("Child two component rendered")
    return (
        <div>
            <div>
                <h1>Child two  component with memo Displaying Last Name</h1>
                <h4>Last name - {lname}</h4>
                <input type='text' placeholder='Last Name' onChange={(e) => onLNameChange(e.target.value)}></input>
            </div>
        </div>
    )
}

export default React.memo(ChildTwo)