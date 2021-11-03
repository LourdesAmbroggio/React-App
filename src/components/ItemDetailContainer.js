import { useEffect, useState } from "react";
import Products from "../Products.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {

    const [item, setItem] = useState();
    const getItem = (data) =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data);
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
            <ItemDetail item={item} />
        </>
    );
}

export default ItemDetailContainer;