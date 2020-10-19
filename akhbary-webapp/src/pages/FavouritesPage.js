import { connect } from 'react-redux';
import React, { Component } from "react";

import "../styles/NewsPage.css";
import FavouriteCard from "../components/FavouriteCard";

class FavouritesPage extends Component {
    removeFavourite = (articleUrl) => {
        this.props.removeFavourite(articleUrl);
    }

    render() {
        return (
            <div className="news-container">
                {
                    this.props.favourites &&
                    this.props.favourites.length &&
                    this.props.favourites.map((article) => {
                        return (
                            <FavouriteCard
                                article={article}
                                onRemoveFavorite={this.removeFavourite}
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
        favourites: state.Favourites.favourites
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFavourite: (articleUrl) => {
            dispatch({
                type: "REMOVE_FAVOURITE",
                payload: articleUrl,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
