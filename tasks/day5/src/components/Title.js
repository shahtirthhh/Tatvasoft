import React from 'react';

function Title(props) {
    return (
        <div>
            <h2>{props.movie.title}</h2>
            <p>{props.movie.desc}</p>
        </div>
    )
}
export default Title;