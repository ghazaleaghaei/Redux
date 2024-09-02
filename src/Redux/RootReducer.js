import { combineReducers } from "redux";
import userReducer from "./User/UserReducer";
import productReducer from "./Product/ProductReducer";
import postReducer from "./AsyncPost/PostReducer";

const RootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
    post: postReducer,
})
export default RootReducer
