import React from "react";

import "../styles/TextInput.css";

const TextInput = ({ id, name, type, placeholder, onChange, value, error }) => {
    return (
        <div className="inputContainer">
            <input
                id={id}
                className={`input ${(error) ? "error" : "normal"}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <p className="errorMsg">{error}</p>
        </div>
    )
}

export default TextInput;
