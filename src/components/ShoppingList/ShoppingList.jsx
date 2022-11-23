import React from 'react';
import './ShoppingList.css';
import Item from '../item/item';
import axios from 'axios';


function ShoppingList({item}) {

    const ClearList = () => {
        
        axios.delete('/shopping')
        .then(response => {
            setShoppingList(response.data)
            console.log('ClearList was a success', response.data);
        })
        .catch(error => {
            alert('error in ClearList');
            console.log(error);
        })
    }
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