import { useState } from "react";
import "../assets/ItemDetail.css";
import PanelContainer from './PanelContainer.js';


const ItemDetail = ({ item }) => {
    const [quantity, setQuantity] = useState(0);

	const getQuantity = function(counter){

		setQuantity(counter);
	}
    

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
                            <div className='pt-5'>
							<h2>{item.name}</h2>
							<h4>{'$ ' + item.price}</h4>
							<p>{ item.description }</p>
							<hr/>
						</div>
                                <div className='pt-5'>
							<PanelContainer
							max={item.stock}
							min={item.min}
							initial={item.initial}
							text="Comprar"
							productId ={item.id}
							name={item.name}
							price={item.price}
							/>
						</div>
                            </div>
                        </div>
                        : "Cargando datos del producto..."
                }
            </div>
        </>
    );
}

export default ItemDetail;