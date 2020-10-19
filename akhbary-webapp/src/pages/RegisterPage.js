import Axios from "axios";
import moment from "moment";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import env from "../env";
import apiRoutes from "../core/routes";
import { axiosAuth, nameValidator, emailValidator, genderValidator } from "../core/utils";

import "../styles/AuthPage.css";
import Alert from "../components/Alert";
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";
import RadioButton from "../components/RadioButton";

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            dateOfBirth: "",
            gender: "male",
            redirect: null,
            nameError: null,
            emailError: null,
            genderError: null,
            alertVisible: false,
            alertTitle: "Error",
            alertContent: ""
        }
    }

    register = (event) => {
        event.preventDefault();
        let data = {
            name: this.state.name,
            email: this.state.email,
            date_of_birth: this.state.dateOfBirth,
            gender: this.state.gender
        };

        let nameError = nameValidator(this.state.name);
        let emailError = emailValidator(this.state.email);
        let genderError = genderValidator(this.state.gender);

        if (nameError || emailError) {
            this.setState({ nameError: nameError, emailError: emailError });
            return;
        }

        if (genderError) {
            this.setState({ alertContent: genderError, alertVisible: true });
            return;
        }

        Axios.post(`${env.api.url}${apiRoutes.auth.register}`, data)
            .then((response) => {
                axiosAuth(response.data.token);
                alert("register was successful an email has been sent to you with your password");
                this.setState({ redirect: "/login" });
            }).catch((error) => {
                this.setState({ alertVisible: true, alertContent: error });
            });
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect} />

        return (
            <form onSubmit={this.register} className="form">
                {this.state.alertVisible &&
                    <Alert
                        title={this.state.alertTitle}
                        content={this.state.alertContent}
                        onOkClick={() => this.setState({ alertVisible: false })}
                    />
                }

                <Title title="Register" />

                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name here"
                    onChange={(event) => this.setState({ name: event.target.value })}
                    value={this.state.name}
                    onBlur={() => this.setState({ nameError: nameValidator(this.state.name) })}
                />

                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    onChange={(event) => this.setState({ email: event.target.value })}
                    value={this.state.email}
                    onBlur={() => this.setState({ emailError: emailValidator(this.state.email) })}
                />

                <TextInput
                    id="dateOfBirth"
                    name="dateOfBirth"
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
