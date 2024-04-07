import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { withRouter } from "react-router-dom";

import { connect } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartAction } from "../../redux/cart/cart.actions";

//Style
import {
  CartDropdownStyle,
  CartItemStyle,
  Message,
} from "./cart-dropdown.style";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownStyle>
    <CartItemStyle>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem keys={cartItem.id} item={cartItem} />
        ))
      ) : (
        <Message> Your cart is empty.</Message>
      )}
    </CartItemStyle>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        //another way of calling dispatch function (shorthand)
        dispatch(toggleCartAction());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </CartDropdownStyle>
);

// there is also have 'createStructuredSelector()' for selecting multiple selectors easily

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
