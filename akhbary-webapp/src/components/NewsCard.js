import React from "react";

import "../styles/NewsCard.css"

const NewsCard = ({title, author, source, publicationDate, imgUrl, content}) => {
    return (
        <div className="card">
            <p className="cardTitle">{title}</p>
            <div className="cardSubTitle">
                <p className="cardSubTitleText">Author: {author}</p>
                <a href={source.url} rel="noopener noreferrer" target="_blank"><p className="cardSubTitleText">source: {source.name}</p></a>
            </div>

            <p className="publicationDate">published at: {publicationDate}</p>

            <div className="contentContainer">
                <img className="artcileImg" src={imgUrl} alt="article" />
                <p className="articleContent">{content}</p>
            </div>
        </div>
    )
}

export default NewsCard;
