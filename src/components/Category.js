import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";
import Loading from "./Loading";
import { getFirestore } from '../firebase';

const Category = () => {
    const { categoryId } = useParams();
    const [categoryItem, setCategoryItem] = useState(null);

    useEffect(() => {
		const db = getFirestore();
		const itemCollection = db.collection('items');
		let validItems = itemCollection.where("category", '==', categoryId);

		validItems.get().then((data) => {
			if (!data.length === 0) {
				console.log('No se encontraron productos con esa categoria');
			}
			setCategoryItem(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
		});

	}, [categoryId]);

    console.log(`categoryItem`, categoryItem)
    
    return (
        <>
            <h2>Estás en la categoría: {categoryId.charAt(0).toUpperCase() + categoryId.slice(1)}</h2>
            <div className="row">
                {categoryItem
                    ? 
                    categoryItem.map(product =>
                        <Item
                            id={product.id}
                            name={product.name}
                            brand={product.category}
                            price={product.price}
                            initial={product.initial}
                            min={product.min}
                            max={product.max}
                            image={product.img}
                            key={product.id}
                        />)
                    : <Loading/>}
            </div>
        </>
    );
}

export default Category;