import { useState, useEffect } from 'react';
import Item from './Item';
import '../assets/ItemList.css';
import Products from '../Products.json';

const ItemList = () => {
  
  const addToCart = (id) => {
  
  
  }
   

  const [showItem, setShowItem] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowItem(true), 2000)
  }, [showItem])

  return (
    <>
      <div>
        <h3 className="Productos">Productos</h3>
        <article className="box grid-responsive">
        { showItem ?  
          Products.map(element => (
            <Item key={element.id} data={element} addToCart={addToCart} />
            ))
          :
          <h3 className="Productos">Aun no hay productos en la lista</h3>
          }
        </article>
      </div>
    </>
  );
}

export default ItemList;
