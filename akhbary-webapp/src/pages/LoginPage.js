import React, { Component } from "react";

import "../styles/Login.css"
import Button from "../components/Button";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="form">
                <Button mode="flat" label="Login" />
            </div>
        );
    }
}
