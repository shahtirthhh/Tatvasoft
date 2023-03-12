import React, { useEffect, useReducer } from 'react'
import axios from 'axios';
function Users() {

    const [id, dispatchId] = useReducer((state, action) => {
        state = action;
        return state;
    }, 1)
    const [user, dispatchUser] = useReducer((state, action) => {
        state = action;
        return state;
    }, {})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/1`)
            .then((res) => {
                dispatchUser(res.data)
            })
    }, [])
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                dispatchUser(res.data)
            })
    }, [id])
    return (
        <div>
            <h3>{user.id}</h3>
            <p>{user.name}</p>
            <p>{user.phone}</p>
            <input onChange={(e) => dispatchId(e.target.value)} type="text" placeholder='Id '></input>
            (Must be between 1 to 10 due to API)
        </div>
    )
}

export default Users