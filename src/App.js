import React, { Component } from 'react';
import EmblemCard from "./components/EmblemCard";
import CardContainerFlex from "./components/CardContainerFlex";
import Header from "./components/Header"
import Footer from "./components/Footer"
import logo from './logo.svg';
import './App.css';
import emblems from './emblems.json';

class App extends Component {
  state = {
    emblems
  };
  render() {
    return (
      <React.Fragment>
      <Header/>
      <CardContainerFlex>
        {this.state.emblems.map(emblem => (
          <EmblemCard
          id={emblem.id}
          key={emblem.id}
          name={emblem.name}
          image={emblem.image}
          />
        ))}
      </CardContainerFlex>
      <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
