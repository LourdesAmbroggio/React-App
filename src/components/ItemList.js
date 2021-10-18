import { useReducer, useState, useEffect } from 'react';
import { ItemInitialState, ItemReducer } from '../reducers/ItemReducer';
import Item from './Item';
import '../assets/ItemList.css';
import CartItem from './CartItem';
import { TYPES } from './ItemAction';


const ItemList = () => {
  const [state, dispatch] = useReducer(ItemReducer,ItemInitialState);
  const { products, cart } = state;
  

  const addToCart = (id) => {
  
    dispatch({type:TYPES.ADD_TO_CART, payload: id});
  }
   
  const deleteFromCart = (id, all = false) => {
    if(all) {
      dispatch({ type: TYPES.REMOVE_ALL_FROM_CART, payload: id })
    } else {
      dispatch({ type: TYPES.REMOVE_ONE_FROM_CART, payload: id })
    }
  };

  const clearCart = () => {
    dispatch({ type: TYPES.CLEAR_CART });
  };

  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowItem(true), 2000)
  }, [showItem])

  return (
    <>
      <div>
        <h2 className="Carrito-titulo">Carrito de compras</h2>
        <h3 className="Productos">Productos</h3>
        <article className="box grid-responsive">
        { showItem ?  
          products.map(element => (
            <Item key={element.id} data={element} addToCart={addToCart} />
            ))
          :
          <h3 className="Productos">Aun no hay productos en la lista</h3>
          }
        </article>
        <h3 className="Carrito-titulo">Carrito</h3>
        <article className="box">
          <button className="Carrito-tres" onClick={clearCart}> Vaciar Carrito</button>
          {
            cart.map((item,index) => <CartItem key={index} data={item} deleteFromCart= {deleteFromCart} />)
          }
        </article>
      </div>
    </>
  );
}

export default ItemList;
