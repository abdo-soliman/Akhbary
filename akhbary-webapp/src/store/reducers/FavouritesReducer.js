const FavouritesReducer = (state = {}, actions) => {
    switch (actions.type) {
        case "ADD_FAVOURITE":
            let af = state.favourites;
            af.push(actions.payload);
            return {
                ...state,
                favourites: af
            };

        case "REMOVE_FAVOURITE":
            let rf = state.favourites;
            rf = rf.filter(item => item.url !== actions.payload);
            return {
                ...state,
                favourites: rf
            };

        default:
            return state;
    }
};

export default FavouritesReducer;
