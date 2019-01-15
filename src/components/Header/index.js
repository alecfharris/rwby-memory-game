import React from "react";
import "./style.css";
import emblems from "../../emblems.json";

class Header extends React.Component {

    state = {
        unguessedEmblems: emblems,
        score: 0,
        topScore: 0,
        mainText: "Click an image to begin!"
    }
    checkGuess = id => {
        /* TODO make filter array that will filter out the
        clicked id
        TODO make map array that will check if the clicked id
         is in the previously filtered array. If it is not, 
         filter the array again and declare the guess a 
         success. If it is in the array, start over and
         declare the guess incorrect. */
        const unguessedEmblems = this.state.unguessedEmblems.filter(emblem => emblem.id !== id);
        this.setState({ unguessedEmblems })
        const correctGuess = this.correctGuess(id);
        if (correctGuess === true) {
            this.setState({ score: this.state.score + 1, mainText: "Correct guess!" })
            if (this.state.score > this.state.topScore) {
                this.setState({ topScore: this.state.score })
            }
        }
    }

    correctGuess = id => {
        let correctGuessBool = true;
        this.state.unguessedEmblems.map(emblem => {
            if (emblem.id === id) {
                this.setState({ unguessedEmblems: emblems, score: 0, mainText: "Incorrect guess!" })
                correctGuessBool = false;
                return correctGuessBool;
            }
        })
        return correctGuessBool;
    }

    render() {
        return (
            <div id="header">
            <div id="header-flex">
            <div className="header-flex-item" id="header-title">RWBY Memory Game</div>
            <div className="header-flex-item" id="header-main-text">{this.state.mainText}</div>
            <div className="header-flex-item" id="header-score">Score: {this.state.score} | Top Score {this.state.topScore}</div>
            </div>
            </div>
        )
    }
}

export default Header;