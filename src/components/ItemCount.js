import React, {useState, useEffect } from 'react';
import '../assets/ItemCount.css';


const style = {
	icon: {
		fontSize : 14,
	},
	text: {
		fontSize: 18,
		fontWeight: 'bold',
	},
}

const ItemCount = function({ max=10, min=1, initial=0, getQuantity }){
	const [counter, setCounter] = useState(null);
	const [maximo, setMaximo] = useState(null);
	const [minimo, setMinimo] = useState(null);
	const [alertMin, setAlertMin ] = useState(false);
	const [alertMax, setAlertMax ] = useState(false);
	
		const removeItem = function(){
			if(counter > min){
				const count = counter - 1;
				setCounter(count);
				{getQuantity(count)}; 
			} else{
				setAlertMin(true);
				setTimeout(function(){ setAlertMin(false); }, 2000);
			}
		}
		const addItem = function(){
			if(counter < max){
				setCounter(counter+1);
			  getQuantity(counter+1)
			} else {
				setAlertMax(true);
				setTimeout(function(){ setAlertMax(false); }, 2000);
			}
		}

	useEffect(() => {
		setCounter(initial);
		setMaximo(max);
		setMinimo(min);
	}, [initial, max, min]);


	return(
		<>
  			<div className="card-body">
    			<div className="sub-container">
  					<div className="col">
  						<a onClick={removeItem} className="btn btn-info">
  							<i style={style.icon} className="fa fa-minus"></i>
  						</a>
  					</div>
  					<div className="col">
  						<p className="texto">{ counter }</p>
  					</div>
  					<div className="col">
  						<a onClick={addItem} className="btn btn-info">
  							<i style={style.icon} className="fa fa-plus"></i>
  						</a>
  					</div>
  				</div>
  				{alertMin && <div className="container-two"><small style={style.alert}>Limite de pedido minimo</small></div>}
  				{alertMax && <div className="container-two"><small style={style.alert}>Limite de pedido máximo</small></div>}
  			</div>
		</>
		);
}

export default ItemCount;