import React, { useContext, useState } from 'react';

export const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartProvider = function({children}){
	const [items, setItems] = useState([]);

	const addToCart = function(name, quantity, id, price){
		const item = {
			name,
			quantity,
			id,
			price
		};
		setItems([...items, item]);
	}

	const removeItem = function(id){
		const item = items.filter(item => item.id !== id);
		setItems(item);
	}

return <CartContext.Provider value={{items, setItems, addToCart, removeItem}}>
{children} 
</CartContext.Provider>
}