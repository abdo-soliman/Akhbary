import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Button from "./Button";
import "../styles/ArticleCard.css";
import { formatDate } from "../core/utils";

const FavouriteCard = ({article, onRemoveFavorite}) => {
    return (
        <div key={article.id} className="card">
            <p className="cardTitle">{article.title}</p>
            <div className="cardSubTitle">
                <p className="cardSubTitleText">Author: {(article.author) ? article.author : "unknown"}</p>
                <a href={article.url} rel="noopener noreferrer" target="_blank"><p className="cardSubTitleText">source: {article.source.name}</p></a>
            </div>

            <p className="publicationDate">published at: {formatDate(article.publishedAt)}</p>

            <div className="contentContainer">
                <img className="artcileImg" src={article.urlToImage} alt="article" />
                <p className="articleContent">{article.content}</p>
            </div>

            <div className="faBtnContainer">
                <div className="space" />
                <Button
                    mode="text"
                    type="button"
                    onClick={() => onRemoveFavorite(article.id)}
                    customClass="iconBtn"
                >
                    <FontAwesomeIcon className="icon" icon={faTrash} size="3x" color="#d40103" />
                </Button>
            </div>
        </div>
    )
}

export default FavouriteCard;
