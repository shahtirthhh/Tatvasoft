import React from 'react';

function Title(props) {
    return (
        <div>
            <h1>{props.Title.title}</h1>
            <p>{props.Title.desc}</p>
        </div>
    )
}
export default Title;