import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Header/Jumbotron';
import Score from './components/Header/Score';
import highScore from './components/Header/HighScore';
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
    count: 0,
    highScore: 0
  };

  handleIncrement = () => {
  // We always use the setState method to update a component's state
  this.setState({ count: this.state.count + 1 });
};

  restartGame = () => {
    this.setState({ count: 0});
    const selectedImg = this.state.characters.filter(item => item.picked === true);
    const imageFix = selectedImg.map(item => item.picked = false);
    shuffle(this.state.characters);
    this.setState({shuffle: true});
  };

  cardPicked = id => {

    const pickedCard = this.state.characters.filter(card => card.id === id);
      if (pickedCard[0].picked === true) {

        // alert ("Oh no! Let's play again.");
        this.restartGame();

        if (this.state.count > this.state.highScore) {
          this.setState({highScore: this.state.count});
        }

        if (this.state.score > 11) {
          this.setState({highScore: this.state.score});
          // alert("Winner! Let's play again");
          this.restartGame();
        }

      }

      else {
        this.handleIncrement();
        shuffle(this.state.characters);
        pickedCard[0].picked = true;
        this.setState({shuffle: true});
      }
  }

  render() {
    return (
      <div>
        <Jumbotron
        score={this.state.count}
        highScore={this.state.highScore}/>

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
