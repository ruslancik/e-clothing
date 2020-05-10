import React from 'react'
import './cart-icon.component.scss'
import { connect } from 'react-redux'
import {toggleCartAction} from '../../redux/cart/cart.actions'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({toogleCartAction}) => (
    <div className="cart-icon" onClick={toogleCartAction}>
        <ShoppingIcon className='shopping-icon'/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toogleCartAction : () => dispatch(toggleCartAction())
})

export default connect(null, mapDispatchToProps)(CartIcon);