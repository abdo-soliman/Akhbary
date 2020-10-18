import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../styles/NavBar.css";

export default class NavBar extends Component {
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

    navigateLeft = (tabId) => {
        let leftTabs = this.state.leftTabs;
        for (let i = 0; i < leftTabs.length; i++) {
            if (leftTabs[i].active)
                leftTabs[i].active = false;

            if (leftTabs[i].id === tabId)
                leftTabs[i].active = true;
        }

        let rightTabs = this.state.rightTabs;
        for (let i = 0; i < rightTabs.length; i++) {
            if (rightTabs[i].active)
                rightTabs[i].active = false;
        }

        this.setState({ leftTabs: leftTabs, rightTabs: rightTabs });
    };

    navigateRight = (tabId) => {
        let rightTabs = this.state.rightTabs;
        for (let i = 0; i < rightTabs.length; i++) {
            if (rightTabs[i].active)
                rightTabs[i].active = false;

            if (rightTabs[i].id === tabId)
                rightTabs[i].active = true;
        }

        let leftTabs = this.state.leftTabs;
        for (let i = 0; i < leftTabs.length; i++) {
            if (leftTabs[i].active)
                leftTabs[i].active = false;
        }

        this.setState({ leftTabs: leftTabs, rightTabs: rightTabs });
    };

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
                                onClick={() => this.navigateLeft(tab.id)}
                                className={`link ${(tab.active) ? "active" : ""}`}
                                to={tab.url}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="right-tabs">
                    {this.state.rightTabs.length && this.state.rightTabs.map((tab) => {
                        return (
                            <Link
                                key={tab.id}
                                onClick={() => this.navigateRight(tab.id)}
                                className={`link ${(tab.active) ? "active" : ""}`}
                                to={tab.url}
                            >
                                {tab.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
}
