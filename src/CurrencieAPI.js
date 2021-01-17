import logo from './logo.svg';
import ExchangeRates from './ExchangeRates.js';
import MarketList from './MarketList.js';
import CurrenciesSelector from './CurrenciesSelector.js';
import App from './App.js';
import MarketAPI from './MarketAPI.js'; 
import './App.css';

import {useEffect, useState} from 'react';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Link } from "react-router-dom";

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/App.js" component={App} />
        <Route exact path="/CurrencieAPI.js" component={CurrencieAPI} />
        <Route exact path="/MarketAPI.js" component={MarketAPI} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

function CurrencieAPI() {
  const [rate, setRate] = useState(0);
  const [currencieFrom, setCurrencieFrom] = useState(0);
  const [currencieTo, setCurrencieTo] = useState(0);
  return (
    <div>      
      <CurrenciesSelector setCurrencieFrom={setCurrencieFrom} setCurrencieTo={setCurrencieTo}/>
      <br/>
      <Link to={{
        pathname: "/MarketAPI.js",
        search: "currencieFrom="+currencieFrom+"&currencieTo="+currencieTo,
        hash: "#the-hash",
        state: { fromDashboard: true }
      }}><button disabled={SelectionOK({currencieFrom} ,{currencieTo})}>
            
             Review the market for this change 
            </button>
            </Link>
      <br/><Link to={"/App.js"}><button>
             Home 
            </button>
            </Link>
    </div>
  );
}

function SelectionOK({currencieFrom ,currencieTo}){
  return (currencieFrom == "0") ? ("disabled") : (currencieTo == "0" ? "disabled" : "");
}

export default CurrencieAPI;