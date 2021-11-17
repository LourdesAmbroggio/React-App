import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import '../assets/CartWidget.css';

const style = {
	text: {
		lineHeight:2,
	}
}

function CartIcon() {
	const { items } = useCartContext();
	const [ units, setUnits ] = useState(0);

	useEffect(() => {
		const countItems = function(data){
			let counter = 0;
			items.map((item) => {
				return counter += item.quantity;
			});
			return counter;
		}

		setUnits(countItems);

	}, [items])
	return (
		<li className="col nav-item cart-container">
			<NavLink className="text-white" to='/cart'>
				<i className="fa fa-shopping-cart" style={style.text}>
					<span className="badge badge-pill badge-light">{units}</span>
				</i>
			</NavLink>
		</li>
		)
}

export default CartIcon;