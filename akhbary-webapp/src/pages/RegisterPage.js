import moment from "moment";
import React, { Component } from "react";

import "../styles/AuthPage.css";
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import RadioButton from "../components/RadioButton";

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            dateOfBirth: "",
            gender: "male"
        }
    }

    register = (event) => {
        event.preventDefault();
        alert(`email: ${this.state.email}\ndateOfBirth: ${this.state.dateOfBirth}\ngender: ${this.state.gender}`);
    }

    render() {
        return (
            <form onSubmit={this.register} className="form">
                <Title title="Register" />

                <TextInput
                    id="dateOfBirth"
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
                />

                <TextInput
                    id="date_of_birth"
                    name="date_of_birth"
                    type="date"
                    placeholder="Date Of Birth"
                    value={this.state.dateOfBirth}
                    onChange={(event) => {
                        let d = moment(event.target.value);
                        this.setState({ dateOfBirth: d.format("YYYY-MM-DD") })
                    }}
                />

                <div onChange={(event) => { this.setState({ gender: event.target.value }) }}>
                    <h2>Gender</h2>
                    <RadioButton
                        id="male"
                        name="gender"
                        label="Male"
                        value={this.state.gender}
                    />
                    <RadioButton
                        id="female"
                        name="gender"
                        label="Female"
                        value={this.state.gender}
                    />
                    <RadioButton
                        id="others"
                        name="gender"
                        label="Others"
                        value={this.state.gender}
                    />
                </div>

                <Button mode="flat" type="submit" label="Register" />
            </form>
        );
    }
}
