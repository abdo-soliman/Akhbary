import Axios from "axios";
import moment from "moment";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import env from "../env";
import apiRoutes from "../core/routes";
import { axiosAuth } from "../core/utils";

import "../styles/AuthPage.css";
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
            redirect: null
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

        Axios.post(`${env.api.url}${apiRoutes.auth.register}`, data)
            .then((response) => {
                axiosAuth(response.data.token);
                alert("register was successful an email has been sent to you with your password");
                this.setState({ redirect: "/" });
            }).catch((error) => {
                alert("error!!!");
                alert(error);
            });
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect} />

        return (
            <form onSubmit={this.register} className="form">
                <Title title="Register" />

                <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name here"
                    value={this.state.name}
                    onChange={(event) => this.setState({ name: event.target.value })}
                />

                <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email here"
                    value={this.state.email}
                    onChange={(event) => this.setState({ email: event.target.value })}
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
