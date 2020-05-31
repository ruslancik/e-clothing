import React from 'react'
import { connect } from 'react-redux'

import { addItemAction } from '../../redux/cart/cart.actions'

//style
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from './collection-item.style';


const CollectionItem = ({item, addItemAction}) => {
    //we destructring name, price and imageUrl to equal one value 'item' beacuse of
    //using item as a argument in our addItemAction and this way we also can use all of the data inside `item`
    const {name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}></BackgroundImage>
            <CollectionFooterContainer>
                <NameContainer className="name">{name}</NameContainer>
                <PriceContainer className="price">{`$${price}`}</PriceContainer>
            </CollectionFooterContainer>
            {/*We use anonymous arr func in onClick otherwise it doesnt work calling function directly */}
            <AddButton inverted onClick={() => addItemAction(item)}> ADD TO CART </AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItemAction : item => dispatch(addItemAction(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem)

