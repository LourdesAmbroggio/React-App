import React, { useEffect } from 'react';
import { getFirestore } from '../firebase/index';
import ItemList from './ItemList.js';
import '../assets/Home.css';

const Home = function () {
	useEffect(() => {
		const db = getFirestore();
		
	}, [])
	return(
		<>
        <h1 className="title-container">¡Bienvenidos a nuestra tienda!</h1>
		<ItemList />
		</>)
}

export default Home;