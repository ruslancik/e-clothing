import React from 'react'
import './checkout.component.scss'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import { selectCartItemsTotal, selectCartItems } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../component/checkout-item/checkout-item.component'

import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component'

const Checkout = ({total, cartItems}) => {
    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItems =>(
                    <CheckoutItem key={cartItems.id} cartItems={cartItems}/>
                ) )
            }
            <div className="total">
                <span>TOTAL : $ {parseInt(total)}</span>
            </div>
             <StripeCheckoutButton price={total} />
        </div>
    )
}

    const mapStateToProps = createStructuredSelector({
        cartItems : selectCartItems,
        total : selectCartItemsTotal
    })
export default connect(mapStateToProps)(Checkout)
