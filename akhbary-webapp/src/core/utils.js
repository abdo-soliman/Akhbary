import Axios from "axios";
import moment from "moment";

export const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

export const formatDate = (date) => {
    let d = moment(date);
    return `${d.format("YYYY-MM-DD")}   ${d.format("hh:mm:ss a")}`;
};

export const axiosAuth = (token) => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
