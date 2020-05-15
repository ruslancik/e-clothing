import React from 'react'
import './checkout-item.component.scss'
import {connect} from 'react-redux'
import {clearItemAction, addItemAction, removeItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItems, clearItem, addItemAction, removeItem}) => {

    const {name, imageUrl, price,quantity} = cartItems;

    return ( <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt={name}/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => removeItem(cartItems)}>&#10094;</div>
                <span className="value">{quantity}</span>    
            <div className="arrow" onClick={() => addItemAction(cartItems)}>&#10095;</div>
        </span>
        <span className="price">${price}</span>
        <span className="remove-button" onClick={() => clearItem(cartItems)}>&#10006;</span>
    </div>)

}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemAction(item)),
    addItemAction : item => dispatch(addItemAction(item)),
    removeItem : item => dispatch(removeItem(item))

})
export default connect(null, mapDispatchToProps)(CheckoutItem)
