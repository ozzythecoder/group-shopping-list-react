import React from 'react';
import '../ShoppingList/ShoppingList.css';
//put in placeholders here for further down the line
//should be able to render here with the placeholders
function item({item}) {
    const buyItem = (e) => {
        e.preventDefault();
        console.log('Add button was clicked');
    }

    const deleteItem = (e) => {
        e.preventDefault();
        console.log('Delete button was clicked');
    }


    return (
        <>
                    {item.map(item => (
                    <section key={item.id} className='list-table'>
                        <p>{item.name}</p>
                        <p>{item.quantity}{item.unit}</p> 
                        {item.is_purchased === false && <button type="add" onClick={buyItem}>Buy</button> }
                        {item.is_purchased === false && <button type="delete" onClick={deleteItem}>Remove</button> } 
                        {item.is_purchased === true && <label>Purcased</label>}
                        {/* <button type="add">Buy</button>
                        <button type="delete">Remove</button> */}
                    </section>))}
        </>
    )
}

export default item;