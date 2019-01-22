import React from "react";
import {
    render
} from "react-dom";
import {
    Provider
} from "react-redux";
import thunk from "redux-thunk";
import {
    createLogger
} from "redux-logger";
import App from "./containers/App";
import store from "./store";

// const middleware = [ thunk ];

// if ( process.env.NODE_ENV !== "production" ) {
//     middleware.push(createLogger());
// }

const rootElement = document.getElementById("root");

render(
    <Provider store = {
        store
    }>
        <App />
    </Provider>,
    rootElement
);