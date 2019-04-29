import React from "react"

function Navbar(props) {
return (
    <nav className="navbar">
        <h2>Clicky Game Navbar</h2>
        <h2 className="score">Score: {props.counter} </h2>
    
    </nav>
    );
}

export default Navbar