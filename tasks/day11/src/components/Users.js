import React, { Component } from 'react'
import UserDetail from './UserDetail';
import axios from 'axios';
export class Users extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    users: res.data
                })
                console.log(this.state.users)
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                {this.state.users.map((user) => { return <UserDetail user={user} /> })}
            </div>
        )
    }
}

export default Users