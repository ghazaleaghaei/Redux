import { Provider } from "react-redux"
import store from "./Redux/Store"
import UserContainer from "./Components/UserContainer"
import ProductContainer from "./Components/ProductContainer"
import PostsList from "./Components/PostsList"

function App() {
    return (
        <Provider store={store}>
            <>
                <h1>redux</h1>
                <UserContainer />
                <ProductContainer />
                <PostsList />
            </>
        </Provider>
    )
}

export default App
