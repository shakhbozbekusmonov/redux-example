import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./root";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import {
    applyMiddleware,
    compose,
    legacy_createStore as createStore,
} from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";

// middleware -> oraliq narsa
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <Root />
    </Provider>
);
