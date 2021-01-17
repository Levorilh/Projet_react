import {useEffect, useState} from 'react';

export default function MarketList({setRate, currencieFrom, currencieTo}){
	const [rateLocal, setRateLocal] = useState(0);
	let [marketList, setMarketList] = useState([]);
	useEffect(() => {
		const fetchTypes = ()=>{ fetch("https://api.cryptonator.com/api/full/" + currencieFrom + "-" + currencieTo)
		.then((response)=> response.json())
		.then((data)=> setMarketList(data["ticker"])); 
	}
	fetchTypes();
	}, []);

	const handleSelection = (event) => {
		setRate(event.target.value);
		setRateLocal(event.target.value);
	}

	return(
		<div>
			Site of change selection <select onChange={handleSelection}>
				<option disabled selected value> -- select an option -- </option>
				{marketList?.markets?.map(({market, price}) => <option key={'${market}'} value={price}>{market}</option> )}
			</select> Site change Rate : {rateLocal}
		</div>
	);
}