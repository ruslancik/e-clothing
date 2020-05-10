import React from 'react'
import { connect } from 'react-redux'

import './collection-item.component.scss'

import CustomButton from '../custom-button/custom-button.component'
import { addItemAction } from '../../redux/cart/cart.actions'



const CollectionItem = ({item, addItemAction}) => {
    //we destructring name, price and imageUrl to equal one value 'item' beacuse of
    //using item as a argument in our addItemAction and this way we also can use all of the data inside `item`
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className="image" style={{backgroundImage : `url(${imageUrl})`}}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            {/*We use anonymous arr func in onClick otherwise it doesnt work calling function directly */}
            <CustomButton inverted onClick={() => addItemAction(item)}> ADD TO CART </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemAction : item => dispatch(addItemAction(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)

