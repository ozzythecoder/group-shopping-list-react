import React from 'react';
import axios from 'axios';
import '../ShoppingList/ShoppingList.css';


//put in placeholders here for further down the line
//should be able to render here with the placeholders
function item({item, fetchList}) {
    const buyItem = (itemId) => {
        // e.preventDefault();
        console.log(itemId);
        console.log('Add button was clicked');

        axios.put("/shopping/" + itemId)
            .then((response) => {
                console.log('Setting item.is_purchased to true was successful')
                fetchList();
            })
            .catch(error => {
                alert('Error in setting item.is_purchased to true');
                console.log(error);
    
            })
    }

    const deleteItem = (itemId) => {
    
        console.log('Delete button was clicked');
        axios.delete("/shopping/" + itemId)
            .then((response) => {
                console.log('Deleted item');
                fetchList()
            })
            .catch(error => {
                alert('Error in deleting item');
                console.log(error);
            })
    }


    return (
        <>
                    {item.map(item => (
                    <section key={item.id} className='list-table'>
                        <p>{item.name}</p>
                        <p>{item.quantity}{item.unit}</p> 
                        {item.is_purchased === false && <button id={item.id} type="add" onClick={() => buyItem(item.id)}>Buy</button> }
                        {item.is_purchased === false && <button type="delete" onClick={() => deleteItem(item.id)} >Remove</button> } 
                        {item.is_purchased === true && <label>Purcased</label>}
                        {/* <button type="add">Buy</button>
                        <button type="delete">Remove</button> */}
                    </section>))}
        </>
    )
}

export default item;