import React from "react";

import "../styles/TextInput.css";

const TextInput = ({ id, name, type, placeholder, value, onChange, onBlur, error }) => {
    return (
        <div className="TextInputContainer">
            <input
                id={id}
                className={`input ${(error) ? "error" : "normal"}`}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            {error &&
                <p className="errorMsg">{error}</p>
            }
        </div>
    )
}

export default TextInput;
