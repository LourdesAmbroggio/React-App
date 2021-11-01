import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CartWidget.css';

function cartWidget(props) {
  return (
    <>
      <div className="cart__item">
        <Link to="/" className="cart-logo">
          <i className="fas fa-shopping-cart" />
        </Link>
      </div>
    </>
  );
}

export default cartWidget;