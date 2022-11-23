import React from 'react';
import './ShoppingList.css'
//put in placeholders here for further down the line
//should be able to render here with the placeholders
function ShoppingList(props) {

    return (
        <div>
            <h2>Shopping List</h2>
            <button type="reset">Reset</button>
            <button type="delete">Clear</button>
                <div className="list-container">
                    {props.item.map(item => (
                    <section key={item.id} className='list-table'>
                        <p>{item.name}</p>
                        <p>{item.quantity}{item.unit}</p>   
                        <button type="add">Buy</button>
                        <button type="delete">Remove</button>
                    </section>))}
                </div>
        </div>
    )
}

export default ShoppingList;