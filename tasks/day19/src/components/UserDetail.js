import React from 'react'

function UserDetail({ user }) {
    return (
        <div>
            Username:{user.username}<br></br>
            Email:{user.email}<br></br>
            Phone:{user.number}<br></br>
            D.O.B:{user.date}<br></br>
            password:{user.password}<br></br>
        </div>
    )
}

export default React.memo(UserDetail)