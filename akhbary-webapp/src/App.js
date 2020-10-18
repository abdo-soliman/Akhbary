import React, { Component } from "react";
import MainNavigator from "./navigation";
import "./styles/app.css";

export default class App extends Component {
    render() {
        return (
            <div>
                <MainNavigator />
                <div className="container">
                    <p>some test text</p>
                </div>
            </div>
        );
    }
}
