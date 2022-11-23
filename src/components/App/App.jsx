import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';
import AddItem from '../AddItem/AddItem.jsx';

function App() {
	let [shoppingList, setShoppingList] = useState([]);

	useEffect(() => {
		fetchList();
	}, [])

	const fetchList = () => {
		axios.get('/shopping')
			.then(response => {
				setShoppingList(response.data)
				console.log('fetchList was a success', response.data);
			})
			.catch(error => {
				alert('error in fetchList');
				console.log(error);
			})
	}

	return (
		<div className="App">
			<Header />

			<AddItem fetchList={fetchList} />
			<ShoppingList item={shoppingList} fetchList={fetchList} />

		</div>
	);
}

export default App;
