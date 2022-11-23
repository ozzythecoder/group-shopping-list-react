import { useState } from "react";



export default function AddItem() {

	let [item, setItem] = useState('');
	let [quantity, setQuantity] = useState('');
	let [unit, setUnit] = useState('');


	const addShoppingItem = (evt) => {
		evt.preventDefault();

		console.log('in addShoppingItem');
	}

	return (
		<section className="add-item-form">
			<form onSubmit={addShoppingItem}>
				<label>Item:
					<input type="text" />
				</label>
				<label>
					Quantity:
					<input type="number" />
				</label>
				<label>
					Unit:
					<input type="text" />
				</label>
				<button type="submit">Add Item</button>
			</form>
		</section>
	)
}