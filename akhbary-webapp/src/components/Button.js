import React from "react";

import "../styles/Button.css"

const Button = ({ mode, label }) => {
    return (
        <button
            type="button"
            className={`core ${mode}`}
        >
            <p className={`label-core ${(mode === "flat") ? "label-flat" : "label-empty"}`}>
                {label}
            </p>
        </button>
    )
}

export default Button;
