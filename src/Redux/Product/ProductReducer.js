import { ADD_PRODUCT } from "./ProductTypes";

const initialState = {
    numOfProduct: 10,
}

export default function productReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PRODUCT: {
            return {
                ...state,
                numOfProduct: state.numOfProduct + action.payload,
            }
        }
        default:
            return state;
    }

}
