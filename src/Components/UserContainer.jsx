import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addUser } from "../Redux/User/UserActions"

function UserContainer() {
    const [number, setNumber] = useState(0)
    const selector = useSelector((state) => state)
    const dispatch = useDispatch()
    return <>
        <h2>user number:{selector.numOfUser}</h2>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(addUser(number))}>
            add user
        </button>
    </>
}

export default UserContainer
