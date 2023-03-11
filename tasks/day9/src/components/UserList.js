import React, { Component } from 'react'
class UserList extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <table>
                    <tr>
                        <td>{this.props.data.id}</td>
                        <td>{this.props.data.name}</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default UserList;