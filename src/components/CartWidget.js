import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/CartWidget.css';

function cartWidget(props) {
  return (
    <>
      <div className="cart__item">
        <Link to="/" className="cart-logo">
          <i class="fas fa-shopping-cart" />
        </Link>
      </div>
    </>
  );
}

export default cartWidget;