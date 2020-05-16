import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

//Redux store
import store from "./store";

//cpmponents
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
