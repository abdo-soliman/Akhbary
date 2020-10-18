import React from 'react';
import '../styles/navbar.css';

function MainNavigator() {
    return (
        <div className="topnav">
            <div className="brand">
                <img src={require("../assets/logo.png")} alt="logo" />
            </div>
            <div className="left-tabs">
                <a className="active" href="#home">Home</a>
                <a href="#business">Business</a>
                <a href="#sports">Sports</a>
                <a href="#favourites">Favourites</a>
            </div>

            <div className="right-tabs">
                <a href="#login">Login</a>
                <a href="#register">Register</a>
            </div>
        </div>
    );
}

export default MainNavigator;
