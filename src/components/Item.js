import React from 'react';
import PanelContainer from '../components/PanelContainer';
import { Link } from 'react-router-dom';
import '../assets/Item.css';

const style = {
	link: {
		textDecoration: 'none',
	},
	card: {
		marginTop: 20,
		width: 400,
		marginRight: 'auto',
		marginLeft: 'auto',
		paddingTop: 20,
	},
	image: {
		width: 200,
		heigth: 200,
		marginRight: 'auto',
		marginLeft: 'auto',
		borderWidth: 0,
	},
}


const Item = function({id, name, brand, price, initial, min, max, image}){
	
	return(
			<div className="card align-items-stretch container" style={style.card}>
				<Link className="Link" style={style.link} to={`/item/${id}`}>
					<h3>{name}</h3>
				<h5>Categoria: {brand.charAt(0).toUpperCase() + brand.slice(1)}</h5>
				<p>${price}</p>
	  			<img style={style.image} className="card-img-top img-thumbnail" src={image} alt={name}/>
				  </Link>
				<PanelContainer 
					max={max} 
					min={min} 
					initial={initial} 
					text="Agregar al carrito"
					productId = {id}
					name={name}
					price={price}
					/>
			</div>
		);
}

export default Item;