const AuthReducer = (state = {}, actions) => {
    switch (actions.type) {
        case "SET_USER_LOGIN":
            return {
                ...state,
                loggedIn: true,
            };

        case "SET_USER_LOGOUT":
            return { ...state, loggedIn: false };

        default:
            return state;
    }
};

export default AuthReducer;
