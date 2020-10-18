import Axios from "axios";
import React, { Component } from "react";

import env from "../env.json";
import "../styles/NewsPage.css";
import { shuffle, formatDate } from "../utils";

import NewsCard from "../components/NewsCard";

export default class HomePage extends Component {
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

    render() {
        return (
            <div className="news-container">
                {
                    this.state.articles.length && this.state.articles.map((article) => {
                        return (
                            <NewsCard
                                title={article.title}
                                author={article.author}
                                source={{ name: article.source.name, url: article.url }}
                                publicationDate={formatDate(article.publishedAt)}
                                imgUrl={article.urlToImage}
                                content={article.content}
                            />
                        );
                    })
                }
            </div>
        );
    }
}
