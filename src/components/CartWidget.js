import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/components/CartWidget.css';

function CartWidget(props) {
  return (
    <>
      <div className='cart__item'>
      <Link to='/' className='cart-logo'>
           
            <i class="fas fa-shopping-cart" />
          </Link>
      </div>
    </>
  );
}

export default CartWidget;
