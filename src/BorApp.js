import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./data/redux-store";

const BorApp = () => {
 return (
    <Provider store = {store}>
      <App />
    </Provider>
 )
}

export default BorApp;