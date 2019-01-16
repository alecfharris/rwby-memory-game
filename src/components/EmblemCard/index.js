import React from "react";
import "./style.css";

function EmblemCard(props) {
    return (
        <div className="card">
            <div className="img-container" onClick={() => props.checkGuess(props.id)}>
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
}

export default EmblemCard;