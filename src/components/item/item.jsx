import React from 'react';
import '../ShoppingList/ShoppingList.css';
//put in placeholders here for further down the line
//should be able to render here with the placeholders
function item({item}) {
    return (
        <>
                    {item.map(item => (
                    <section key={item.id} className='list-table'>
                        <p>{item.name}</p>
                        <p>{item.quantity}{item.unit}</p>   
                        <button type="add">Buy</button>
                        <button type="delete">Remove</button>
                    </section>))}
        </>
    )
}

export default item;