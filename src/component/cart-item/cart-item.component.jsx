import React from 'react'

import './cart-item.component.scss'

// it's the same thing when we 'return' explicitly 
//const {imageUrl,price,name,quantity} = item;
const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <div className="cart-item">
        <img src={imageUrl} alt="item"/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItem