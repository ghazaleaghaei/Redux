import { ADD_USER } from "./UserTypes";

const initialState = {
    numOfUser: 10,
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER: {
            return {
                ...state,
                numOfUser: state.numOfUser + action.payload,
            }
        }
        default:
            return state;
    }

}
