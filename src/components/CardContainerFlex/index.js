import React from "react";
import "./style.css";

function CardContainerFlex(props) {
    return <div className="card-container-flex">
    <div className="main">{props.children}</div>
    </div>;
}

export default CardContainerFlex;