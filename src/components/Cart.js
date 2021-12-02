import React, { useState } from 'react';
import CheckoutForm from './CheckoutForm.js';
import CheckoutDetail from './CheckoutDetail.js';
import Loading from './Loading.js';
import { useCartContext } from '../context/cartContext.js';
import firebase from 'firebase/compat/app';
import { getFirestore } from '../firebase';
import { useHistory } from 'react-router-dom';

const Cart = function () {
	const { setItems } = useCartContext();
	const [userData, setUserData] = useState([]);
	const [cartItems, setCartItems] = useState([]);
	const [total, setTotal] = useState(null);
	const [order, setOrder] = useState(null);
	const [loading, setLoading] = useState(false);
	const [finished, setFinished] = useState(true);
	const [newArrayOrder, setNewArrayOrder] = useState([]);
	const history = useHistory();

	const checkUserData = () => {
		
		if (userData.name !== '' && userData.email !== '' && userData.phone !== '' && userData.email_2 !== '') {
			setFinished(false);
		}
	}

	const getUserData = function (evt) {
		setUserData({ ...userData, [evt.target.id]: evt.target.value });
		checkUserData();
	}

	const getItems = function (data) {
		setCartItems(data);
	}

	const getTotal = function (orderTotal) {
		setTotal(orderTotal);
	}

	const createOrder = async function () {
		setLoading(true);
		const db = getFirestore();

		//check items stock
		const items = cartItems.map(cartItem => ({ id: cartItem.id, quantity: cartItem.quantity }));
		const itemsToUpdate = db.collection('items').where(firebase.firestore.FieldPath.documentId(), 'in', items.map(i => i.id));
		const query = await itemsToUpdate.get();
		const batch = db.batch();

		const outOfStock = [];
		try {
			query.docs.forEach((docSnapShot, idx) => {
				if (docSnapShot.data().stock >= items[idx].quantity) {
					batch.update(docSnapShot.ref, { stock: docSnapShot.data().stock - items[idx].quantity });
				} else {
					outOfStock.push({ ...docSnapShot.data(), id: docSnapShot.id });
				}
			});
		} catch (err) {
			setLoading(false);
		}

		if (outOfStock.length !== 0) {
			await batch.commit();
			const orders = db.collection('orders');

			const newOrder = {
				buyer: userData,
				items: cartItems,
				date: firebase.firestore.Timestamp.fromDate(new Date()),
				total: total
			}
			setNewArrayOrder([...newArrayOrder, newOrder]);
			orders.add(newOrder).then(({ id }) => {
				setLoading(false);
				setOrder(id);
				setItems([])
			}).catch(err => {
				console.log(err);
			});
		} else {
			console.log('No hay stock');
		}

	}

	const style = {
		body: {
			minHeight: 475,
		}
	}


	return <div className="container" style={style.body}>
		{
		order
			?
			<div className="pt-3 pb-3" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
				<h3>Pedido realizado con éxito</h3>
				<h4 style={{marginBottom: 30}}>¡Gracias por tu compra!</h4>
				<button onClick={ () => history.push('/') } className="btn btn-info">Volver a la tienda</button>
			</div>
			:
			<>
				<div className="pt-3 pb-3">
					<h1>Finalizá tu pedido</h1>
				</div>
				{
					loading ?
						<Loading />
						:
						<div className="row">
							<div className="col">
								<CheckoutForm getUserData={getUserData} createOrder={createOrder} buyButton={finished} />
							</div>
							<div className="col">
								<CheckoutDetail getItems={getItems} getTotal={getTotal} />
							</div>
						</div>
				}
			</>
		}
	</div>
}

export default Cart;