import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import store from "./store";

import Dashboard from "./components/dashboard";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Dashboard />
            </Router>
        </Provider>
    );
}

export default App;
