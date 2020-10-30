import store from "../store";

export default function authHeader() {
    const auth = store.getState().auth;

    // const user = JSON.parse(localStorage.getItem("user"))
    if (auth && auth.user && auth.user.type && auth.user.token) {
        return {Authorization: auth.user.type + ' ' + auth.user.token}
    } else {
        return {}
    }
}