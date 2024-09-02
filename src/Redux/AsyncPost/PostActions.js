import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./PostTypes"
import axios from "axios";

function fetchPostRequest() {
    return {
        type: FETCH_USER_REQUEST
    }
}
function fetchPostSuccess(posts) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: posts
    }
}
function fetchPostFailure(error) {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}

export function fetchPost() {
    return (dispatch) => {
        dispatch(fetchPostRequest);
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => dispatch(fetchPostSuccess(res.data)))
            .catch((err) => dispatch(fetchPostFailure(err.message)))
    }
}
