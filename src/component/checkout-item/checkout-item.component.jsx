import React from 'react'

import {connect} from 'react-redux'
import {clearItemAction, addItemAction, removeItem} from '../../redux/cart/cart.actions'
// style
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer } from './checkout-item.style'

const CheckoutItem = ({cartItems, clearItem, addItemAction, removeItem}) => {

    const {name, imageUrl, price,quantity} = cartItems;

    return ( <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt={name}/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={() => removeItem(cartItems)}>&#10094;</div>
                <span>{quantity}</span>    
            <div onClick={() => addItemAction(cartItems)}>&#10095;</div>
        </QuantityContainer>
        <TextContainer>${price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItem(cartItems)}>&#10006;</RemoveButtonContainer>
    </CheckoutItemContainer>)

}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemAction(item)),
    addItemAction : item => dispatch(addItemAction(item)),
    removeItem : item => dispatch(removeItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItem)
