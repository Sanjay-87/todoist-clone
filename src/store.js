import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

const middleware = [thunk];
const intialState = {};

const store = createStore(
    rootReducers,
    intialState,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
