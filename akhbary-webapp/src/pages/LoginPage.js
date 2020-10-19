import Axios from "axios";
import { connect } from 'react-redux';
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import env from "../env";
import apiRoutes from "../core/routes";
import { axiosAuth } from "../core/utils";

import "../styles/AuthPage.css";
import Alert from "../components/Alert";
import Title from "../components/Title";
import Button from "../components/Button";
import TextInput from "../components/TextInput";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: null,
            alertVisible: false,
            alertTitle: "Error",
            alertContent: ""
        }
    }

    login = (event) => {
        event.preventDefault();
        let data = {
            email: this.state.email,
            password: this.state.password
        };

        Axios.post(`${env.api.url}${apiRoutes.auth.login}`, data)
            .then((response) => {
                axiosAuth(response.data.token);
                this.setState({ redirect: "/home" }, () => {
                    this.props.setLogin();
                });
            }).catch((error) => {
                this.setState({ alertVisible: true, alertContent: error });
            });
    }

    render() {
        if (this.state.redirect)
            return <Redirect to={this.state.redirect} />

        return (
            <form onSubmit={this.login} className="form">
                {this.state.alertVisible &&
                    <Alert
                        title={this.state.alertTitle}
                        content={this.state.alertContent}
                        onOkClick={() => this.setState({ alertVisible: false })}
                    />
                }

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

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: () => {
            dispatch({
                type: "SET_USER_LOGIN"
            });
        },
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);
