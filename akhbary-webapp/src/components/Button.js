import React from "react";

import "../styles/Button.css";

const Button = ({ mode, type, label, onClick }) => {
    return (
        <button
            type={type}
            className={`core ${mode}`}
            onClick={onClick}
        >
            <p className={`label-core ${(mode === "flat") ? "label-flat" : "label-empty"}`}>
                {label}
            </p>
        </button>
    )
}

export default Button;
