import React from 'react';
function Title(props) {
    return (
        <>
            <h2>{props.data.title}</h2>
            <h3>{props.data.desc}</h3>
        </>
    )
}
export default Title;