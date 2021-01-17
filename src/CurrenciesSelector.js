import {useEffect, useState} from 'react';

export default function CurrenciesSelector({setCurrencieFrom, setCurrencieTo}){
	let [currenciesList, setCurrenciesList] = useState([]);
	useEffect(() => {
		const fetchTypes = ()=>{ fetch("https://www.cryptonator.com/api/currencies")
		.then((response)=> response.json())
		.then((data)=> setCurrenciesList(data["rows"])); 
	}
	fetchTypes();
	}, []);

	const handleSelectionFrom = (event) => {
		setCurrencieFrom(event.target.value);
	}

	const handleSelectionTo = (event) => {
		setCurrencieTo(event.target.value);
	}

	return(
		<div>
			Currencie from : <select onChange={handleSelectionFrom}>
				<option disabled selected value> -- select an option -- </option>
				{currenciesList?.map(({name, code}) => <option key={'${name}'} value={code}>{name}</option> )}
			</select> Currencie to : <select onChange={handleSelectionTo}>
				<option disabled selected value> -- select an option -- </option>
				{currenciesList?.map(({name, code}) => <option key={'${name}'} value={code}>{name}</option> )}
			</select>
		</div>
	);
}
