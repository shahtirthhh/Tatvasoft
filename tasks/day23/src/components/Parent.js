import React from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function Parent() {
    console.log("Parent component rendered")
    const [name, setName] = React.useState("")
    const [fname, setFame] = React.useState("")
    const [lname, setLame] = React.useState("")
    React.useEffect(() => {
        setName(fname + " " + lname)
    }, [fname, lname])
    return (
        <div>
            <h1>Parent component Displaying Full Name</h1>
            <h4>Full name - {name}</h4>
            <input type='text' placeholder='First Name' onChange={(e) => setFame(e.target.value)}></input>
            <input type='text' placeholder='Last Name' onChange={(e) => setLame(e.target.value)}></input>
            <hr></hr>
            <ChildOne onFNameChange={setFame} fname={fname} />
            <ChildTwo onLNameChange={setLame} fname={lname} />
        </div>
    )
}

export default Parent