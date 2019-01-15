import React from "react";
import Header from "../Header"
import "./style.css";

function EmblemCard(props) {
    let headerObj = new Header();
    return (
        <div className="card">
            <div className="img-container" onClick={() => headerObj.checkGuess(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default EmblemCard;