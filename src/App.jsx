import { Provider } from "react-redux"
import store from "./Redux/Store"
import UserContainer from "./Components/UserContainer"

function App() {
    return (
        <Provider store={store}>
            <>
                <h1>redux</h1>
                <UserContainer />
            </>
        </Provider>
    )
}

export default App
