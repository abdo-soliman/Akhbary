import React from "react";

import "../styles/Button.css";

const Button = ({ mode, type, label, onClick, customClass, children }) => {
    return (
        <button
            type={type}
            className={`core ${mode} ${(customClass) ? customClass : ""}`}
            onClick={onClick}
        >
            {label &&
                <p className={`label-core ${(mode === "flat") ? "label-flat" : "label-empty"}`}>
                    {label}
                </p>
            }
            {children}
        </button>
    )
}

export default Button;
