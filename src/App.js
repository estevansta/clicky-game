// importing a compoment from react
import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container";
// import Spongebob from  "./spongebob.json"

// From function App() to class App extends Component to import components
class App extends Component {


  // render instead of function to display DOM
  render() {
    return (
      <div className="container">
        <Navbar/>
        <header className="App-header">
          <div className="jumbotron">
            <h1>Clicky Game</h1>
            <p>Hello World</p>
            <Container/>
            {/* {this.state.Spongebob.map(spongebob => (
            <Container
            id={spongebob.id}
            name={spongebob.name}
            image={spongebob.image}
            clicked={spongebob.clicked}
          />
        ))} */}
            
          </div>
        </header>
      </div>
    );
  }
}
export default App;
