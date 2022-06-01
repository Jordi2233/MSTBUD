import React from "react";

const Button = (props) => {

    

    return (
        <button 
        name={props.name} 
        onClick={props.function} 
        onMouseOver={props.function} 
        className="btn-42 btn41-43">
        {props.title}
        </button>
    )
}

export default Button;