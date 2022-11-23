import React from 'react';
import './ShoppingList.css';
import Item from '../item/item';
//put in placeholders here for further down the line
//should be able to render here with the placeholders
function ShoppingList({item}) {

    return (
        <div>
            <h2>Shopping List</h2>
            <button type="reset">Reset</button>
            <button type="delete">Clear</button>
            <Item item={item} />
        </div>
    )
}

export default ShoppingList;