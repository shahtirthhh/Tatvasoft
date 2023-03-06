import React, { Component } from 'react';
import Title from '../Title';
class Home extends Component {
    data = [
        {
            title: "Transformers 1",
            desc: "First movie in series"
        },
        {
            title: "Transformers Dark of the Moon",
            desc: "Second movie in series"
        },
        {
            title: "Transformers Rise of the Beasts",
            desc: "Last movie in series"
        }
    ]
    render() {
        return (
            <div>
                <h2>This is Home Page</h2>
                {this.data.map((obj) => {
                    return <Title movie={obj} />
                })}
            </div>
        )
    }
}
export default Home;