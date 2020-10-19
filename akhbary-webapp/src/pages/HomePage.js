import Axios from "axios";
import moment from "moment";
import { connect } from 'react-redux';
import React, { Component } from "react";

import env from "../env";
import "../styles/NewsPage.css";
import apiRoutes from "../core/routes";
import { shuffle } from "../core/utils";

import ArticleCard from "../components/ArticleCard";

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            articles: []
        };
    }

    async componentDidMount() {
        let EgyptSports = await Axios.get(`${env.newsApiBaseUrl}?country=eg&category=sports&apiKey=${env.newsApiKey}`);
        let EgyptBusiness = await Axios.get(`${env.newsApiBaseUrl}?country=eg&category=business&apiKey=${env.newsApiKey}`);

        let UAESports = await Axios.get(`${env.newsApiBaseUrl}?country=ae&category=sports&apiKey=${env.newsApiKey}`);
        let UAEBusiness = await Axios.get(`${env.newsApiBaseUrl}?country=ae&category=business&apiKey=${env.newsApiKey}`);

        let articles = EgyptSports.data.articles;
        articles = articles.concat(EgyptBusiness.data.articles);
        articles = articles.concat(UAESports.data.articles);
        articles = articles.concat(UAEBusiness.data.articles);

        this.setState({ articles: shuffle(articles) });
    }

    _addFavourite = (article) => {
        let d = moment(article.publishedAt);

        let data = {
            title: article.title,
            author_name: article.author,
            image_url: article.urlToImage,
            source_name: article.source.name,
            source_url: article.url,
            published_at: `${d.format("YYYY-MM-DD")} ${d.format("HH:mm:ss")}`,
            content: article.content
        };

        console.log(data);

        Axios.post(`${env.api.url}${apiRoutes.favourites.add}`, data)
            .then((response) => {
                article.id = response.data.favourite.id;
                this.props.addFavourite(article);
            })
            .catch((error) => {
                alert("error!!!");
                alert(error);
            });
    }

    _removeFavourite = (articleId) => {
        Axios.delete(`${env.api.url}${apiRoutes.favourites.delete}/${articleId}`)
            .then(() => this.props.removeFavourite(articleId))
            .catch((error) => {
                alert("error!!!");
                alert(error);
            });
    }

    toggleFavourites = (article) => {
        let favourites = this.props.favourites;
        if (favourites && favourites.some(item => item.url === article.url))
            this._removeFavourite(article.id);
        else
            this._addFavourite(article);
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
        removeFavourite: (articleId) => {
            dispatch({
                type: "REMOVE_FAVOURITE",
                payload: articleId,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
