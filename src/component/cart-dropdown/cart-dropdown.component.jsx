import React from 'react'
import './cart-dropdown.component.scss'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selector'
import {withRouter} from 'react-router-dom'
import { toggleCartAction } from '../../redux/cart/cart.actions'


const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems.map(cartItem => <CartItem keys={cartItem.id} item={cartItem} />)
                : <span className="empty-message">Your cart is empty.</span>
            }
        </div>
        <CustomButton onClick={()=> {
            history.push('/checkout')
            //another way of calling dispatch function (shorthand)
            dispatch(toggleCartAction())
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)

// there is also have 'createStructuredSelector()' for selecting multiple selectors easily

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropdown));