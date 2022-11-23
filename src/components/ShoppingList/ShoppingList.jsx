import React from 'react';
import './ShoppingList.css';
import Item from '../item/item';
import axios from 'axios';
//put in placeholders here for further down the line
//should be able to render here with the placeholders
function ShoppingList({ item, fetchList }) {
	const handleReset = () => {

		axios.put('/shopping/reset')
			.then((response) => {
				console.log('Resetting All Purchases to False. In axios.put (/shopping/reset)');
				fetchList();
			}).catch((error) => {
				console.log('Not able to Reset all Purchases.', error);
			})
	}




	return (
		<div>
			<h2>Shopping List</h2>
			<button type="reset" onClick={handleReset}>Reset</button>
			<button type="delete">Clear</button>
			<Item item={item} />
		</div>
	)
}

export default ShoppingList;