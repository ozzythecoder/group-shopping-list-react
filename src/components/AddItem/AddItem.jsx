import axios from "axios";
import { useState } from "react";
import './AddItem.css';



export default function AddItem({ fetchList }) {
	let [item, setItem] = useState('');
	let [quantity, setQuantity] = useState('');
	let [unit, setUnit] = useState('EA');

	const handleSelect = (e) => {
		console.log('unit of measure: ', e.target.value)
		setUnit(e.target.value)
	}

	const addShoppingItem = (evt) => {
		evt.preventDefault();

		console.log('in addShoppingItem');
		axios.post('/shopping', {
			name: item,
			quantity: quantity,
			unit: unit
		}).then(response => {
			console.log('Collected data from DOM...');
			fetchList();
			clearInputs();
		}).catch(error => {
			console.log('There is an Error in axios.Post', error);
			alert('Server error - try again later')
		});
	}

	const clearInputs = () => {
		setItem('');
		setQuantity('');
		setUnit('');
	}

	return (
		<section className="add-item-form">
			<form onSubmit={addShoppingItem}>
				<label>Item:
					<input id="item" type="text" onChange={e => setItem(e.target.value)} value={item} />
				</label>
				<label>
					Quantity:
					<input id="quantity" type="number" onChange={e => setQuantity(e.target.value)} value={quantity} />
				</label>
				<label>
					Unit:
					{/* <input id="unit" type="text" onChange={e => setUnit(e.target.value)} value={unit} /> */}
					<select id="unit" onChange={handleSelect} >
						<option value="EA">Each</option>
						<option value="LBS">Pound</option>
						<option value="GAL">Gallon</option>
						<option value="BAG">Bag</option>
						<option value="OZ">Ounces</option>
					</select>


				</label>
				<button id="submit " type="submit">Add Item</button>
			</form>
		</section>
	)
}