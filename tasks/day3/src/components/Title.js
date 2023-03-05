import React from 'react';
function Title(props) {
    const { title, desc } = props.state
    return (
        <>
            <h2>{title}</h2>
            <h3>{desc}</h3>
        </>
    )
}
export default Title;