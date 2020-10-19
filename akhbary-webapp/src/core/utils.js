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

export const nameValidator = (name) => {
    if (!name || name.length < 6)
        return "Full Name must be at least 6 chracters.";

    return null;
};

export const emailValidator = (email) => {
    const re = /\S+@\S+\.\S+/;

    if (!email || email.length <= 0) return "Email cannot be empty.";
    if (!re.test(email)) return "Ooops! We need a valid email address.";

    return null;
};

export const passwordValidator = (password) => {
    if (!password || password.length < 8)
        return "Password must be at least 8 chracters.";

    return null;
};

export const genderValidator = (gender) => {
    if (gender === "male" || gender === "female" || gender === "others")
        return null;

    return "Invalid Gender must be male, female or others";
};

export const formatDate = (date) => {
    let d = moment(date);
    return `${d.format("YYYY-MM-DD")}   ${d.format("hh:mm:ss a")}`;
};

export const axiosAuth = (token) => {
    Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
