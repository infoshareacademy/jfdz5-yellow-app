import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router
} from 'react-router-dom'
import {Provider} from "react-redux";

import "./index.css";
// import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import App from "./Components/App";

import "react-fontawesome";


import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(

        <Router>
            <App/>
        </Router>,

    document.getElementById('root')
);

registerServiceWorker()
