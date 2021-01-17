import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Link} from "react-router-dom";
import CurrencieAPI from './CurrencieAPI.js';
import MarketAPI from './MarketAPI.js';



function App() {
  return (
    <div>
      Cryptocurrencies exchange rates API
      <br/>Cryptonator provides unique volume of cryptocurrency exchange rates data, which is delivered in easy-to-integrate JSON format via simple HTTPS requests. Prices are updated every 30 seconds, covering 300+ cryptocurrencies across 42 exchanges.
      <br/>
      <br/><a href="https://www.cryptonator.com/api/currencies">Currencies</a> : Returns actual currenciename and code for ticker API
      <br/>
      <br/><a href="https://api.cryptonator.com/api/ticker/btc-usd">Simple ticker</a> : Returns actual volume-weighted price, total 24h volume and the price change.
      <br/>
      <br/><a href="https://api.cryptonator.com/api/full/btc-usd">Complete ticker</a> : Returns actual volume-weighted price, total 24h volume, rate change as well as prices and volumes across all connected exchanges.
      <br/>
      <br/>
      <br/><Link to="/CurrencieAPI.js"><button>
             Currencies API view 
            </button>
            </Link>
    </div>
  );
}

export default App;
