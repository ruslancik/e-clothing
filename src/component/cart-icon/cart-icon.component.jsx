import React from 'react'
import { connect } from 'react-redux'
import {toggleCartAction} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

//Style
import {ShoppingIcon, ItemCountContainer, CartIconContainer} from './cart-icon.style'


const CartIcon = ({toggleCartAction, ItemCount}) => (
    <CartIconContainer onClick={toggleCartAction}>
        <ShoppingIcon/>
        <ItemCountContainer>{ItemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartAction : () => dispatch(toggleCartAction())
})

const mapStateToProps = state => ({
    ItemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);