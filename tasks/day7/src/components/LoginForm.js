import React, { useState } from "react";
import './login.css'
function LoginForm() {
    const [u, setU] = useState("")
    const [p, setP] = useState("")
    const [e, setE] = useState("")
    function submit(event) {
        event.preventDefault();
        window.alert(`Username: ${u}\nEmail: ${e}\nPassword: ${p}`)
    }
    function changeE(event) {
        setE(event.target.value)
    }
    function changeU(event) {
        setU(event.target.value)
    }
    function changeP(event) {
        setP(event.target.value)
    }
    return (
        <div>
            <form onSubmit={submit} className="form">
                <input type="text" placeholder="Username" onChange={changeU}></input>
                <input type="email" placeholder="Email" onChange={changeE}></input>
                <input type="password" placeholder="Password" onChange={changeP}></input>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;