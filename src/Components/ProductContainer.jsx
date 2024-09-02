import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { addProduct } from "../Redux/Product/ProductActions"

function ProductContainer() {
    const [number, setNumber] = useState(0)
    const selector = useSelector((state) => state.product)
    const dispatch = useDispatch()
    return <>
        <h2>products number:{selector.numOfProduct}</h2>
        <input
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={() => dispatch(addProduct(number))}>
            add product
        </button>
    </>
}

export default ProductContainer
