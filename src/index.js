import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import CurrencieAPI from './CurrencieAPI.js';
import MarketAPI from './MarketAPI.js';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/App.js" component={App} />
        <Route path="/CurrencieAPI.js" component={CurrencieAPI} />
        <Route path="/MarketAPI.js" component={MarketAPI} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


