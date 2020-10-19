import Axios from "axios";
import { connect } from 'react-redux';
import React, { Component } from "react";

import env from "../env";
import "../styles/NewsPage.css";
import apiRoutes from "../core/routes";

import Alert from "../components/Alert";
import FavouriteCard from "../components/FavouriteCard";

class FavouritesPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alertVisible: false,
            alertTitle: "Error",
            alertContent: ""
        };
    }

    removeFavourite = (articleId) => {
        Axios.delete(`${env.api.url}${apiRoutes.favourites.delete}/${articleId}`)
            .then(() => this.props.removeFavourite(articleId))
            .catch((error) => {
                this.setState({ alertVisible: true, alertContent: error });
            });
    }

    render() {
        return (
            <div className="news-container">
                {this.state.alertVisible &&
                    <Alert
                        title={this.state.alertTitle}
                        content={this.state.alertContent}
                        onOkClick={() => this.setState({ alertVisible: false })}
                    />
                }

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
        removeFavourite: (articleId) => {
            dispatch({
                type: "REMOVE_FAVOURITE",
                payload: articleId,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FavouritesPage);
