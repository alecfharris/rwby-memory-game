import React from "react";
import "./style.css";

function Header(props)  {
        return (
            <React.Fragment>
            <div id="header">
            <div id="header-flex">
            <div className="header-flex-item" id="header-title">RWBY Memory Game</div>
            <div className="header-flex-item" id="header-main-text">{props.mainText}</div>
            <div className="header-flex-item" id="header-score">Score: {props.score} | Top Score: {props.topScore}</div>
            </div>
            </div>
            </React.Fragment>
        )
}

export default Header;