import {useEffect, useState} from 'react';
import Input from './inputText.js';

export default function ExchangeRates({rate, currencieFrom, currencieTo}){
	let [exchangeRate, setExchangeRate] = useState([]);
	const [inputFromTo, setInputFromTo] = useState("");
	const [inputToFrom, setInputToFrom] = useState("");
	useEffect(() => {
		const fetchTypes = ()=>{ fetch("https://api.cryptonator.com/api/ticker/" + currencieFrom + "-" + currencieTo)
		.then((response)=> response.json())
		.then((data)=> setExchangeRate(data["ticker"])); 
	}
	fetchTypes();
	}, []);


	return(
		<div>
			
				{exchangeRate?.base? (
					"<p>Global change rate "+ exchangeRate.base +
					" to "+ exchangeRate.target +
					" : "+ exchangeRate.price +"</p>"+
					"<p>Convert "+ exchangeRate.base +" to "+ exchangeRate.target +" </p>"+
					"<Input setInput="+ setInputFromTo +"/> "+ exchangeRate.base +" = "+ inputFromTo*rate +" "+ exchangeRate.target  +
					"<p>Convert "+ exchangeRate.target +" to "+ exchangeRate.base + " </p>"+
					"<Input setInput="+ setInputToFrom +"/> "+ exchangeRate.target +" = "+inputToFrom/rate +" "+ exchangeRate.base 
				):( "Sorry their is not rate change between "+currencieFrom+" and "+currencieTo + " on our parteners sites")}
			
		</div>
	);
}