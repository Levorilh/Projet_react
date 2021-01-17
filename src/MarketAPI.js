import logo from './logo.svg';
import ExchangeRates from './ExchangeRates.js';
import MarketList from './MarketList.js';
import CurrenciesSelector from './CurrenciesSelector.js';
import './App.css';

import {
  BrowserRouter as Router,
  Link,
  useLocation
} from "react-router-dom";
import {useEffect, useState} from 'react';
import React from "react";

function MarketAPI({currencieFrom, currencieTo}) {
  const [rate, setRate] = useState(0);
  return (
    <div>
        <MarketList setRate={setRate} currencieFrom={currencieFrom} currencieTo={currencieTo}/>
        <ExchangeRates rate={rate} currencieFrom={currencieFrom} currencieTo={currencieTo}/>
    </div>
  );
}

export default function QueryParamsExample() {
  let query = useQuery();
  return (
    <Router>
      <MarketAPI currencieFrom={query.get("currencieFrom")} currencieTo={query.get("currencieTo")}/>
    </Router>
  );
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}