import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Header/Jumbotron';
import Score from './components/Header/Score';
// import logo from './logo.svg';
import characters from './characters.json';
import './App.css';

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

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

  return array;
}

class App extends Component {

  state = {
    characters: characters,
    shuffle: false,
    count: 0
  };

  handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 });
};

// handleDecrement decreases this.state.count by 1
handleDecrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count - 1 });
};

  restartGame = () => {
    this.setState({count: 0});

  };

  // cardPicked = id => {
  //
  //   const pickedCard = this.state.characters.filter(card => card.id === id);
  //     if (pickedCard[0].picked === true) {
  //
  //     else {
  //       this.handleIncrement();
  //       shuffle(this.state.characters);
  //       pickedCard[0].picked = true;
  //       this.setState({shuffle: true});
  //     }
  // }

  render() {
    return (
      <div>
        <Jumbotron
        score={this.state.count} />

        <Wrapper>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              cardPicked={this.cardPicked}
              picked={character.picked}

            />
          ))}
        </Wrapper>

      </div>
    );
  }
}

export default App;
