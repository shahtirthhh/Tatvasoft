import React, { Component } from 'react';
import Title from '../Title';
class Home extends Component {
    data = [
        {
            title: "LDRP-ITR",
            desc: "It is located in Gandhinagar,Gujarat"
        },
        {
            title: "Nirma University",
            desc: "It is One of the best university in Gujarat"
        },
        {
            title: "GMERS",
            desc: "It is Government medical University"
        }
    ]

    render() {
        return (
            <>
                <h1>This is Home Class Component</h1>
                {this.data.map((obj) => {
                    return <Title data={obj} />
                })}
            </>
        )
    }
}
export default Home;