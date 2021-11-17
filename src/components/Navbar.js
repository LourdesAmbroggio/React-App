import React from 'react';
import CartWidget from '../components/CartWidget';
import NavBarElement from './NavBarElement.js';
import '../assets/Navbar.css';
import { Link } from 'react-router-dom';


const categories = [
					{id:1, category: 'Vestidos Elegantes'},
					{id:2, category: 'Vestidos Informales'},
					{id:3, category: 'Vestidos Clásicos'}
					]

function Navbar() {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">DRESS</Link>
				<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
		  				<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
						<li className="nav-item dropdown">
							<p className="nav-link dropdown-toggle" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categorías</p>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
								{categories.map(category =>
												<p className="dropdown-item">{category.category}</p>
												)}
							</div>
						</li>
						<CartWidget />
					</ul>
	  			</div>
			</nav>
		)
}

export default Navbar;