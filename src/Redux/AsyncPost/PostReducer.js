import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./PostTypes";

const initialState = {
    loading: false,
    data: [],
    error: "",
}
export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            console.log(state)
            return {
                ...state,
                loading: true,
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: "",
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: action.payload
            }
        default:
            return state;
    }
}
