import React, { Component } from "react";

import "../styles/Home.css"
import NewsCard from "../components/NewsCard";

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        };
    }

    render() {
        return (
            <div className="home">
                <NewsCard
                    title="Title"
                    author="Abdo"
                    source={{ name: "Ajil.news", url: "https://www.ajil.news/sport/بث-مباشر-مشاهدة-مباراة-الزمالك-والرجا/" }}
                    publicationDate="2020-10-18T18:05:00Z"
                    imgUrl="https://www.ajil.news/wp-content/uploads/2020/10/1004.jpg"
                    content="test this is the news content"
                />

                <NewsCard
                    title="Title"
                    author="Abdo"
                    source={{ name: "Ajil.news", url: "https://www.ajil.news/sport/بث-مباشر-مشاهدة-مباراة-الزمالك-والرجا/" }}
                    publicationDate="2020-10-18T18:05:00Z"
                    imgUrl="https://www.ajil.news/wp-content/uploads/2020/10/1004.jpg"
                    content="test this is the news content"
                />
            </div>
        );
    }
}
