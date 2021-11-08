import React from 'react';
import "../assets/Item.css";
import { Link, useHistory } from 'react-router-dom';

const Item = ({data}) => {
     
    
    const history = useHistory ();

    let {id, name, price, img} = data;
    return (
        
        <div className="Carrito">
            <img className="img-container" src={img}  />
           <h4 className="Productos"> {name} </h4>
           <h5 className="Precio"> ${price}.00 </h5>
           <Link to={`/Product/${id}`}> 
            <button className="Carrito-cinco">Agregar al carrito</button>
            </Link>
          {/*   <Link to={`/Product/${id}`}> 
          <button className="Carrito-cinco" >Ver detalles</button> 
          </Link> */}
        </div>
  
    )
}

export default Item;
