import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router
} from 'react-router-dom'
import { Provider } from "react-redux";

import "./index.css";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import Auth from './Components/Auth'
import App from "./Components/App";

import "react-fontawesome";


import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Auth>
              <App/>
            </Auth>
        </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker()
