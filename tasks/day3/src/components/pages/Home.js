import React, { Component } from 'react';
import Title from '../Title';
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Hey new visitor',
            desc: 'Here we upload best content for knowledge'
        }
    }
    subscribe() {
        this.setState({
            title: 'Thank you for subscribing !',
            desc: 'You will get all notifications related to our channel'
        })
    }
    render() {
        return (
            <>
                <h1>This is Home Class Component</h1>
                <Title state={this.state} />
                <button onClick={() => this.subscribe()}>Subscribe</button>
            </>
        )
    }
}
export default Home;