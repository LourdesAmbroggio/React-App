import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import '../../src/components/Navbar.css';


const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to='/'>
        <img src='./R.png' width='50'/>
        MARKET </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active " to='/' >Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Productos'>Productos</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Ofertas'>Ofertas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='Ayuda'>Ayuda</Link>  <CartWidget /> 
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;