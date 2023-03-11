import React from 'react'

function UserDetail(props) {
    return (
        <div>
            <h4>{props.user.userId}</h4>
            <h5>{props.user.title}</h5>
        </div>
    )
}

export default UserDetail