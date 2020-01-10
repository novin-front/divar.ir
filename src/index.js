
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import store from './store/index';

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/css/design-system-style.css"
import "assets/css/app.css";

import App from 'App.js'



ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root")
);
