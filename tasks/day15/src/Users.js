import React, { useEffect } from 'react'

function Users(props) {
    const [user, changeUser] = React.useState(props.user)
    useEffect(() => {
        console.log("Users loaded")
    }, [])
    return (
        <div>
            <h2>{user.name}</h2>
            <h4>{user.age}</h4>
            <button onClick={() => { changeUser({ name: "Honey", age: 22 }) }}>change</button>
        </div>
    )
}

export default Users