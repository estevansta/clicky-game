import React from "react"

function Container(props) {
return (
    <img className="container col-lg-3" alt={props.name} >
    {/* dummy image to see if it'll get populated to the DOM */}
    {/* <img src="https://vignette.wikia.nocookie.net/spongebob/images/4/46/SVG_SpongeBob_SquarePants.svg/revision/latest/scale-to-width-down/200?cb=20181117230211" alt="spongebob" class="img-thumbnail"></img> */}
    </img>
    );
}


export default Container