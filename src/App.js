import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import Container from "./components/container"

function App() {
  return (
    <div className="container">
      <Navbar/>
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

export default App;
