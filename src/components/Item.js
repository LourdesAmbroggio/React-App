import React from 'react'

const ItemList = ({data, addToCart}) => {
    let {id, name, price} = data;
    return (
        <div className="Carrito">
           <h4 className="Productos"> {name} </h4>
           <h5 className="Precio"> ${price}.00 </h5>
           <button className="Carrito-cinco" onClick={() => addToCart(id)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemList;
