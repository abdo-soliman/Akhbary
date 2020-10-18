import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import BusinessPage from "./pages/BusinessPage";
import SportsPage from "./pages/SportsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />

                <div className="container">
                    <Switch>
                        <Route path="/business">
                            <BusinessPage />
                        </Route>
                        <Route path="/sports">
                            <SportsPage />
                        </Route>

                        <Route path="/login">
                            <LoginPage />
                        </Route>
                        <Route path="/register">
                            <RegisterPage />
                        </Route>

                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
