import React, { Component } from "react";

import "../styles/Login.css"
import Title from "../components/Title";
import Button from "../components/Button";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="form">
                <Title title="Login" />
                <Button mode="flat" label="Login" />
            </div>
        );
    }
}
