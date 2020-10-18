import React, { Component } from "react";

import "../styles/Login.css"
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    login = (event) => {
        event.preventDefault();
        alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
    }

    render() {
        return (
            <form onSubmit={this.login} className="form">
                <Title title="Login" />

                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                />

                <TextInput
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password here"
                    value={this.state.password}
                    onChange={(event) => this.setState({ password: event.target.value })}
                />

                <Button mode="flat" type="submit" label="Login" />
            </form>
        );
    }
}
