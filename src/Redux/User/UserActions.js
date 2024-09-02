import { ADD_USER } from "./UserTypes";

export function addUser(payload = 1) {
    return {
        type: ADD_USER,
        payload: Number(payload)
    }
}
