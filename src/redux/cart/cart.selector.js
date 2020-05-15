// burada reslecting meqsedi eger bizim her hansi componenetde direct mudaxilemiz yoxdursa 
// o componenti bosu bosuna her defe render ettirmemek ve bosuna performansi dusurmemek ucun istifade etmekdir
// butun 'mapStateToProps' lari bu structure ile qura bilerik ve daha performance-li olacaqdir

// there is also have 'createStructuredSelector()' for selecting multiple selectors easily

import { createSelector } from 'reselect'

const selectCart = state => state.cart;

// for cartDropdown
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

// for cartIcon (quantity)
export const selectCartItemsCount = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce( (acc, items) => acc + items.quantity, 0)
)

export const selectCartItemsTotal = createSelector (
    [selectCartItems],
    cartItems => cartItems.reduce((acc,items) => acc + items.quantity * items.price, 0 )
)