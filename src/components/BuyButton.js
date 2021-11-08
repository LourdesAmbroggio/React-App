import React, { useContext, useState } from 'react';
import { useCartContext } from '../context/cartContext';

const BuyButton = function({name, productId, text, quantity, onAdd, price}){
	const { items, addToCart } = useCartContext();
	const [ added, setAdded ] = useState(false);

	const updateBtn = function(){
		setAdded(true);
		setTimeout(function(){ setAdded(false); }, 3000);
	}

	const style = {
		alert: {
			color: 'grey',
		}
	}
	
	return <div className="card-footer">
  				<button onClick={ (e) => {addToCart(name, quantity, productId, price); updateBtn() } } className="btn btn-info">
            		{ text }
            		{/* { quantity > 1 ? ' ' + quantity + ' unidades ' :' ' + quantity + ' unidad ' } */}
          		</button>
          		{added && <div className="container"><small style={style.alert}>El producto se agregó al carrito</small></div>}
  			</div>
}

export default BuyButton;