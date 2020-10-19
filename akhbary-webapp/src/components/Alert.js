import * as React from "react";

import "../styles/Alert.css";
import Button from "./Button";

const Alert = ({title, content, onOkClick}) => {
    return (
        <div className={"alert"}>
            <p className="alertTitle">{title}</p>
            <div className="lineBreak" />
            <p className="alertContent">{content.toString()}</p>
            <div className="alertActionContainer">
                <div className="alertBtnSpace"/>
                <Button
                    mode="text"
                    label="Ok"
                    customClass="alertBtn"
                    onClick={onOkClick}
                />
            </div>
        </div>
    )
}

export default Alert;
