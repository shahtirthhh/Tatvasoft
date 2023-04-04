import React, { useState, useEffect } from 'react'

function UseState() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    useEffect(() => {
        setCount(count + 1)
    }, [name, email])
    return (
        <>
            <input type='text' placeholder='name' onChange={(e) => { setName(e.target.value) }}></input>
            <input type='text' placeholder='email' onChange={(e) => { setEmail(e.target.value) }}></input>
            <label>Count - {count}</label>
        </>
    )
}

export default UseState