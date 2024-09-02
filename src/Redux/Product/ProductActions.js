import { ADD_PRODUCT } from "./ProductTypes";

export function addProduct(payload = 1) {
    return {
        type: ADD_PRODUCT,
        payload: Number(payload)
    }
}
