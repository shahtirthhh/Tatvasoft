import React from 'react';
import './CSS/whiteBtn.css';
function WhiteButton(props) {
    return (
        <div>
            <button className="whiteBtn">{props.buttonText}</button>
        </div>
    )
}
export default WhiteButton;