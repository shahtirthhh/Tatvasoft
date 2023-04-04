import { useState } from 'react'

function RegisterUser({ onUserChange }) {
    const [username, setUsername] = useState("")
    const [number, setNumber] = useState("")
    const [date, setDate] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const usernameHandler = (e) => {
        setUsername(e.target.value)
    }
    const numberHandler = (e) => {
        setNumber(e.target.value)
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault()
        let obj = {
            username: username,
            number: number,
            date: date,
            email: email,
            password: password
        }
        onUserChange(obj)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder='Username' onBlur={usernameHandler}></input>
                <input type="text" placeholder='Number' onBlur={numberHandler}></input>
                <input type="date" onBlur={dateHandler}></input>
                <input type="email" placeholder='Email' onBlur={emailHandler}></input>
                <input type="password" placeholder='Password' onBlur={passwordHandler}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default RegisterUser;