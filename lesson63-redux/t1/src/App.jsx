import { Provider } from "react-redux"
import Counter from "./Counter"
import React from "react"
import store from "./store"


const App = () => {
    return (
        <Provider store={store} >
            <Counter />
        </Provider>
    )
}

export default App;