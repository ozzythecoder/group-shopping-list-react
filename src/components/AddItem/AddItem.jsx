import axios from "axios";
import { useState } from "react";



export default function AddItem({fetchList}) {
	let [item, setItem] = useState('');
	let [quantity, setQuantity] = useState('');
	let [unit, setUnit] = useState('');


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
					<input type="text" onChange={e => setItem(e.target.value)} value={item} />
				</label>
				<label>
					Quantity:
					<input type="number" onChange={e => setQuantity(e.target.value)} value={quantity} />
				</label>
				<label>
					Unit:
					<input type="text" onChange={e => setUnit(e.target.value)} value={unit} />
				</label>
				<button type="submit">Add Item</button>
			</form>

			<p> .  {item} . {quantity} . {unit}</p>
		</section>
	)
}