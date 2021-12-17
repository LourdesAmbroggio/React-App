import React, { useEffect, useState } from 'react';
import Item from '../components/Item';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase/index';

const ItemList = function () {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	const { category_id } = useParams();
	console.log(`category_id`, category_id)

	useEffect(() => {
		const db = getFirestore();

		const itemCollection = db.collection('items');
		let validItems = itemCollection.where('price', '>', 0);
		console.log(`validItems`, validItems)

		if (category_id) {
			
			validItems = validItems.where('category', '==', category_id);
			console.log(validItems);
		}

		validItems.get().then((data) => {
			if (!data.length === 0) {
				console.log('No se encontraron productos');
			}
			setLoading(false);
			setProducts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		});

	}, [category_id]);

	console.log(`products`, products)

	return <>
		{loading && <Loading />}
		<div className='row'>
			{products.map(product =>
				<Item
					key={product.id}
					id={product.id}
					name={product.name}
					brand={product.category}
					price={product.price}
					initial={product.initial}
					min={product.min}
					max={product.max}
					image={product.img}
				/>)}
		</div>
	</>
}

export default ItemList;