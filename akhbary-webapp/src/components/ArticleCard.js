import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartEmpty } from '@fortawesome/free-regular-svg-icons';

import Button from "./Button";
import "../styles/ArticleCard.css";
import { formatDate } from "../core/utils";

const ArticleCard = ({article, favourite, onAddToFavourites}) => {
    const [favorite, setFavorite] = React.useState(favourite);

    return (
        <div key={article.url} className="card">
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

            {onAddToFavourites &&
                <div className="faBtnContainer">
                    <div className="space" />
                    <Button
                        mode="text"
                        type="button"
                        onClick={() => {
                            setFavorite(!favorite);
                            onAddToFavourites(article);
                        }}
                        customClass="iconBtn"
                    >
                        <FontAwesomeIcon className="icon" icon={(favorite) ? HeartSolid : HeartEmpty} size="3x" color="#d40103" />
                    </Button>
                </div>
            }
        </div>
    )
}

export default ArticleCard;
