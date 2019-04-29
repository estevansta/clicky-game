// importing a compoment from react
import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container";
import Spongebob from  "./spongebob.json"

// From function App() to class App extends Component to import components
class App extends Component {
  // setting up counter and score tracker
  state = {
    // assinging the state to the spongebob.json file
    Spongebob,
    // score keeping track "current score"
    counter: 0,
    //overall top score
    score: 0,
  }

  // render instead of function to display DOM
  render() {
    return (
      <div className="container">
        {/* state counter gets passed into the Navb ar */}
        <Navbar 
        counter={this.state.counter}
        score={this.state.score}/>
        <header className="App-header">
          <div className="jumbotron">
            <p>Click on a spongebob character to start!</p>
            {/* exporting spongebob.json to the Container component*/}
            {this.state.Spongebob.map(spongebob => (
            <Container
            id={spongebob.id}
            name={spongebob.name}
            image={spongebob.image}
            clicked={spongebob.clicked}
          />
        ))}
            
          </div>
        </header>
      </div>
    );
  }
}
export default App;
