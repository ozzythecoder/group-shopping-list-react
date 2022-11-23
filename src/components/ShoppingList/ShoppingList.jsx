import React from 'react';
import './ShoppingList.css';
import Item from '../item/item';
import axios from 'axios';

function ShoppingList({ item, fetchList }) {

    const ClearList = (e) => {
        e.preventDefault();
        axios.delete('/shopping')
        .then(response => {
            fetchList();
            console.log('ClearList was a success', response.data);
        })
        .catch(error => {
            alert('error in ClearList');
            console.log(error);
        })
    }

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
			<button type="delete" onClick={ClearList}>Clear</button>
      <div  className="list-container">
			  <Item item={item} fetchList={fetchList} />
      </div>
		</div>
	)
}

export default ShoppingList;