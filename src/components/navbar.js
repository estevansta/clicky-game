import React from "react"

function Navbar(props) {
return (
    <nav className="navbar">
        <h2>Clicky Game</h2>
        <h2 className="score">Score: {props.counter} Top Score: {props.score} </h2>
    </nav>
    );
}

export default Navbar