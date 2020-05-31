import React from 'react'

//style
import {CartItemContainer, CartItemImage, ItemDetailsContainer  } from './cart-item.style'

// it's the same thing when we 'return' explicitly 
//const {imageUrl,price,name,quantity} = item;
const CartItem = ({item: {imageUrl, name, price, quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <ItemDetailsContainer>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem