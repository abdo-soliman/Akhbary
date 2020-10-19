import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React, { Component } from "react";

import "../styles/NavBar.css";
import { axiosAuth } from "../core/utils";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leftTabs: [
                {
                    id: 1,
                    url: "/",
                    name: "Home",
                    active: true
                },
                {
                    id: 2,
                    url: "/business",
                    name: "Business",
                    active: false
                },
                {
                    id: 3,
                    url: "/sports",
                    name: "Sports",
                    active: false
                }
            ],
            rightTabs: [
                {
                    id: 4,
                    url: "/login",
                    name: "Login",
                    active: false
                },
                {
                    id: 5,
                    url: "/register",
                    name: "Register",
                    active: false
                }
            ]
        }
    }

    render() {
        return (
            <div className="topnav">
                <Link className="brand" to="/">
                    <img src={require("../assets/logo.png")} alt="logo" />
                </Link>
                <div className="left-tabs">
                    {this.state.leftTabs.length && this.state.leftTabs.map((tab) => {
                        return (
                            <Link
                                key={tab.id}
                                className="link"
                                to={tab.url}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                    {this.props.loggedIn &&
                        <Link
                            key={6}
                            className={"link"}
                            to="/favourites"
                        >
                            Favourites
                        </Link>
                    }
                </div>

                <div className="right-tabs">
                    {
                        !this.props.loggedIn &&
                        this.state.rightTabs.length &&
                        this.state.rightTabs.map((tab) => {
                            return (
                                <Link
                                    key={tab.id}
                                    className="link"
                                    to={tab.url}
                                >
                                    {tab.name}
                                </Link>
                            );
                        })
                    }

                    {this.props.loggedIn &&
                        <Link
                            key={10}
                            onClick={() => {
                                axiosAuth(null);
                                this.props.setLogout();
                            }}
                            className={"link"}
                            to="/"
                        >
                            Logout
                        </Link>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.Auth.loggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLogout: () => {
            dispatch({
                type: "SET_USER_LOGOUT"
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
