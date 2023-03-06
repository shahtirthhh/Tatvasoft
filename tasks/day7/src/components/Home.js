import React, { Component } from 'react';
import Title from './Title';
import LoginForm from './LoginForm';
class Home extends Component {
    render() {
        return (
            <>
                <Title title="Login form" desc="Login for banking details" />
                <LoginForm />
            </>
        )
    }
}
export default Home;