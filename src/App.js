import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import EmblemCard from "./components/EmblemCard";
import CardContainerFlex from "./components/CardContainerFlex";
import Header from "./components/Header"
import Footer from "./components/Footer"
import './App.css';
import emblems from './emblems.json';

class App extends Component {
  state = {
    emblems,
    guessedEmblems: [],
    score: 0,
    topScore: 0,
    mainText: "Click an image to begin!"
  };
  checkGuess = id => {
    // Checks guess and then updates state
    const correctGuess = this.correctGuess(id);
    if (correctGuess === true) {
        this.setState({ score: this.state.score + 1, mainText: "Correct guess!" })
        if (this.state.score >= this.state.topScore) {
            this.setState({ topScore: this.state.score +1 })
        }
    }
    else {
      this.setState({ guessedEmblems: [], score: 0, mainText: "Incorrect guess!" });
    }
}

correctGuess = (id) => {
    let correctGuessBool = true;
    let guessedEmblems = this.state.guessedEmblems;
    // Checks to see if the id matches already guessed ids and then returns false if it does
    guessedEmblems.map(emblem => {
        if (emblem === id) {
            correctGuessBool = false;
            return correctGuessBool;
        }
    })
    // Makes sure only to push id to array if guess was correct to prevent the game being unable to reset on a false guess
    if (correctGuessBool === true){
      guessedEmblems.push(id);
      this.setState({ guessedEmblems })
    }
    this.shuffle();
    return correctGuessBool;
}

shuffle= () =>{
  let array = this.state.emblems;
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  this.setState({emblems: array});
}


  render() {
    return (
      <Wrapper>
        <Header 
        mainText={this.state.mainText}
        score={this.state.score}
        topScore={this.state.topScore}
        />
        <CardContainerFlex>
          {this.state.emblems.map(emblem => (
            <EmblemCard
              id={emblem.id}
              key={emblem.id}
              name={emblem.name}
              image={emblem.image}
              checkGuess={this.checkGuess}
            />
          ))}
        </CardContainerFlex>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
