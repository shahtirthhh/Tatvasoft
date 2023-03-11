import React from "react";

function Title(props) {
    console.log("Memo function re-rendered")
    return (
        <h2>{props.title}</h2>
    )
}

export default React.memo(Title);