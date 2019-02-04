import {
    Route,
    Router
} from "react-router";
import {
    createHashHistory,
    createBrowserHistory
} from "history";
import React from "react";
import {
    Home,
    Main
} from "./page";

const Routes = () => <Router
    history = {
        createHashHistory()
    }>
        <div>
            <Route 
                path = "*"
                component = {
                    Main
                }/>
            <Route
                path = "/Home"
                component = {
                    Home
                }/>
        </div>
    </Router>;

export default Routes;