import Axios from "axios";
import { connect } from 'react-redux';
import React, { Component } from "react";

import env from "../env";
import "../styles/NewsPage.css";
import { shuffle } from "../core/utils";

import ArticleCard from "../components/ArticleCard";

class SportsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let EgyptSports = await Axios.get(`${env.newsApiBaseUrl}?country=eg&category=sports&apiKey=${env.newsApiKey}`);
        let UAESports = await Axios.get(`${env.newsApiBaseUrl}?country=ae&category=sports&apiKey=${env.newsApiKey}`);

        let articles = EgyptSports.data.articles;
        articles = articles.concat(UAESports.data.articles);

        this.setState({ articles: shuffle(articles) });
    }

    toggleFavourites = (article) => {
        let favourites = this.props.favourites;
        if (favourites && favourites.some(item => item.url === article.url))
            this.props.removeFavourite(article.url);
        else
            this.props.addFavourite(article);
    }

    isFavourite = (articleUrl) => {
        let favourites = this.props.favourites;
        if (favourites)
            return favourites.some(item => item.url === articleUrl);
        
        return false;
    }

    render() {
        return (
            <div className="news-container">
                {
                    this.state.articles.length && this.state.articles.map((article) => {
                        return (
                            <ArticleCard
                                article={article}
                                favourite={this.isFavourite(article.url)}
                                onAddToFavourites={(this.props.loggedIn) ? this.toggleFavourites : null}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.Auth.loggedIn,
        favourites: state.Favourites.favourites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFavourite: (article) => {
            dispatch({
                type: "ADD_FAVOURITE",
                payload: article,
            });
        },
        removeFavourite: (articleUrl) => {
            dispatch({
                type: "REMOVE_FAVOURITE",
                payload: articleUrl,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsPage);
