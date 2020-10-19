import { connect } from 'react-redux';
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/App.css";

import NavBar from "./components/NavBar";

import HomePage from "./pages/HomePage";
import SportsPage from "./pages/SportsPage";
import BusinessPage from "./pages/BusinessPage";
import FavouritesPage from "./pages/FavouritesPage";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

class App extends Component {
    render() {
        return (
            <Router>
                <NavBar />
                <div className="container-fluid">
                    <Switch>
                        <Route path="/business">
                            <BusinessPage />
                        </Route>
                        <Route path="/sports">
                            <SportsPage />
                        </Route>

                        {this.props.loggedIn &&
                            <Route path="/favourites">
                                <FavouritesPage />
                            </Route>
                        }

                        {!this.props.loggedIn &&
                            <Route path="/login">
                                <LoginPage />
                            </Route>
                        }
                        {!this.props.loggedIn &&
                            <Route path="/register">
                                <RegisterPage />
                            </Route>
                        }

                        <Route path="/">
                            <HomePage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.Auth.loggedIn
    };
}

export default connect(mapStateToProps)(App);
