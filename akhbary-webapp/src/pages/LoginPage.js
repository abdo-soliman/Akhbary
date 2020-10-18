import React, { Component } from "react";

import "../styles/Login.css"
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default class LoginPage extends Component {
    render() {
        return (
            <div className="form">
                <Title title="Login" />
                <TextInput id="email" name="email" type="email" placeholder="Enter your email here" />
                <TextInput id="password" name="password" type="password" placeholder="Enter your password here" />
                <Button mode="flat" label="Login" />
            </div>
        );
    }
}
