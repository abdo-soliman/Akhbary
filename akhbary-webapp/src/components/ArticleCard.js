import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as HeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as HeartEmpty } from '@fortawesome/free-regular-svg-icons';

import Button from "./Button";
import "../styles/ArticleCard.css";

const ArticleCard = ({id, title, author, source, publicationDate, imgUrl, content, onAddToFavourites}) => {
    const [favorite, setFavorite] = React.useState(false);

    return (
        <div key={id} className="card">
            <p className="cardTitle">{title}</p>
            <div className="cardSubTitle">
                <p className="cardSubTitleText">Author: {(author) ? author : "unknown"}</p>
                <a href={source.url} rel="noopener noreferrer" target="_blank"><p className="cardSubTitleText">source: {source.name}</p></a>
            </div>

            <p className="publicationDate">published at: {publicationDate}</p>

            <div className="contentContainer">
                <img className="artcileImg" src={imgUrl} alt="article" />
                <p className="articleContent">{content}</p>
            </div>

            {onAddToFavourites &&
                <div className="faBtnContainer">
                    <div className="space" />
                    <Button
                        mode="text"
                        type="button"
                        onClick={() => {
                            setFavorite(!favorite);
                            onAddToFavourites(id);
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
