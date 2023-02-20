import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter} from 'react-router-dom';
import "./index.css";
import { Provider } from "react-redux/es";
import store from "./redux/Store";
import App from "./App";

ReactDOM.render(
 <BrowserRouter> 
   <Provider store={store}>

    <App />
    </Provider>

    </BrowserRouter> 

 ,
  document.getElementById("root")
);
