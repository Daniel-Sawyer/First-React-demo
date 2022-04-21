import React from "react";

function Child(prop) {
    return(
        <div>
            <h2>Child Component</h2>
            <h3>{prop.userInput} </h3>
        </div>
    )
}

export default Child