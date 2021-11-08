import { useEffect, useState } from "react";
import Products from "../Products.json";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);
    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    let product = data.filter(item => item.id.toString() === id)
                    resolve(product);
                } else {
                    reject("No se encontro el producto");
                }
            }, 2000);
        });

    useEffect(() => {
        getItem(Products)
            .then((res) => setItem(res[0]))
            .catch((err) => console.log(err));

    }, []);

    return (
        <>
            <h2>Detalles del producto seleccionado</h2>
                                 
            {item !== undefined && item !== null &&  <ItemDetail item={item} /> }
        </>
    );
}

export default ItemDetailContainer;