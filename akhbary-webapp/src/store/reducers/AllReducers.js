import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import FavouritesReducer from "./FavouritesReducer";

const AllReducers = combineReducers({
    Auth: AuthReducer,
    Favourites: FavouritesReducer,
});

export default AllReducers;
