import React, { Component } from "react";

import "../styles/NewsPage.css";

export default class FavouritesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        };
    }

    render() {
        return (
            <div className="news-container">
                <p>Favourites Page</p>
            </div>
        );
    }
}
