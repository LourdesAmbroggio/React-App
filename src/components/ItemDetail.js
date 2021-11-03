import ItemCount from "./ItemCount";
import "../assets/ItemDetail.css";


const ItemDetail = ({ item }) => {


    return (
        <>
            <div className="itemDetailContainer">
                {
                    item ?
                        <div className="itemDetail">
                            <div>
                                <img src={item.img} alt={item.img} />
                            </div>
                            <div className="itemText">
                                <h3>{item.name}</h3>
                                <p>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.price)}</p>
                                <p>{item.description}</p>
                                <ItemCount stock={item.stock} initial={1} />
                                <div className="addToCart">Agregar al carrito </div>
                            </div>
                        </div>
                        : "Cargando datos del producto..."
                }
            </div>
        </>
    );
}

export default ItemDetail;