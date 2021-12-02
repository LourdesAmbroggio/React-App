import React from 'react';
import CartWidget from '../components/CartWidget';
import NavBarElement from './NavBarElement.js';
import '../assets/Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
	return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">DRESS</Link>
				<div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
					<ul className="navbar-nav ml-auto">
		  				<NavBarElement name="Home" destination="/" />
				      	<NavBarElement name="Productos" destination="/" />
						<CartWidget />
					</ul>
	  			</div>
			</nav>
		)
}

export default Navbar;