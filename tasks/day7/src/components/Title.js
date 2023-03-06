import React from "react";
function Title(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
        </div>
    )
}
export default Title;