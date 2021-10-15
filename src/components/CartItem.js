import React from 'react'
import '../assets/ItemCount.css';

const CartItem = ({data, deleteFromCart}) => {
    let {id, name, price, quantity} = data;
    return (
        <div className="Carrito-dos">
            <h4 className="Productos">{name}</h4>
            <h5 className="Precio">${price}.00 x {quantity} = ${price * quantity}.00 </h5>
            <br />
            <button className="Carrito-tres" onClick={() => deleteFromCart(id)}>Eliminar uno</button>
            <br />
            <button className="Carrito-cuatro" onClick={() => deleteFromCart(id, true)}>Eliminar todos</button>
            <br /> <br />
        </div>
    )
};

export default CartItem;
