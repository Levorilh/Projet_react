import {useEffect, useState} from 'react';

export default function Input({setInput}){
	const [txt, settxt] = useState("");
	return(
			<input type='text' onKeyDown={(e)=>{
          		if(e.keyCode == 8)
          		{
            		settxt(txt.substring(0,txt.length-1))
					setInput(txt.substring(0,txt.length-1))
            	}
            	else            		
				{
				  	settxt(txt + e.key)
					setInput(txt + e.key)
				}
			}}/>
	);
}