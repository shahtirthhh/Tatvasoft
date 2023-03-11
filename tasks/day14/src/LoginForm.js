import React, { useState } from 'react'

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const submit = () => {
        let user = {
            username: username,
            password: password
        }
        alert(`Username:${user.username}\nPassword:${user.password}`);
    }
    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={(e) => setUsername(e.target.value)} name="username" placeholder="Username" />
                <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Password" />
                <input onClick={submit} type="submit" value="Login" />
            </form>
        </div>
    )
}

export default LoginForm