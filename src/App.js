import React from 'react';
import Navbar from '../src/components/Navbar';
import Home from '../src/components/Home';
import Category from '../src/components/Category';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartProvider } from './context/cartContext.js';

function App() {
	return (
		<CartProvider>
			<BrowserRouter>
				<div>
					<Navbar />
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route exact path='/category/:category_id'>
							<Home />
						</Route>
						<Route path='/item/:id'>
							<ItemDetailContainer />
						</Route>
						<Route path='/cart'>
							<Cart />
						</Route>
						<Route exact path="/:categoryId" component={Category} />
					</Switch>
				</div>
			</BrowserRouter>
		</CartProvider>
	);
}

export default App;