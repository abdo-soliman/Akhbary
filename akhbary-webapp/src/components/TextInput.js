import React from "react";

import "../styles/TextInput.css"

const TextInput = ({ id, name, type, placeholder, error }) => {
    return (
        <div className="inputContainer">
            <input
                id={id}
                className={`input ${(error) ? "error" : "normal"}`}
                type={type}
                name={name}
                placeholder={placeholder}
            />
            <p className="errorMsg">{error}</p>
        </div>
    )
}

export default TextInput;
