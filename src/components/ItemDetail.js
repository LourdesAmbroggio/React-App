import React from 'react';
import "../assets/Item.css";

const ItemDetail = ({data, addToCart}) => {
    let {id, name, price, img} = data;
    return (
        <div className="Carrito">
            <img className="img-container" src={img}  />
           <h4 className="Productos"> {name} </h4>
           <h5 className="Precio"> ${price}.00 </h5>
           <button className="Carrito-cinco" onClick={() => addToCart(id)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemDetail;
