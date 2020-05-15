import CartActionTypes from './cart.types'

export const toggleCartAction = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemAction = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemAction = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})