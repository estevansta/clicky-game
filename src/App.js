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
    Spongebob,
    counter: 0,
    score:0,
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
            <h1>Clicky Game</h1>
            <p>Hello World</p>
            <Container/>
            
          </div>
        </header>
      </div>
    );
  }
}
export default App;
