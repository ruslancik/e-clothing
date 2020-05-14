import React from 'react'
import './cart-icon.component.scss'
import { connect } from 'react-redux'
import {toggleCartAction} from '../../redux/cart/cart.actions'
import {selectCartItemsCount} from '../../redux/cart/cart.selector'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({toogleCartAction, ItemCount}) => (
    <div className="cart-icon" onClick={toogleCartAction}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">{ItemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartAction : () => dispatch(toggleCartAction())
})

const mapStateToProps = state => ({
    ItemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);