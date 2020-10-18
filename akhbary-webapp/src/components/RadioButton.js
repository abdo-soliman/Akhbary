import React from "react";

import "../styles/RadioButton.css";

const RadioButton = ({ id, name, label, value, onChange }) => {
    return (
        <div className="inputContainer">
            <input
                id={id}
                type="radio"
                className="radio"
                name={name}
                value={value}
                onChange={onChange}
            />
            <label className="radio-label" for={id}>{label}</label>
        </div>
    )
}

export default RadioButton;
