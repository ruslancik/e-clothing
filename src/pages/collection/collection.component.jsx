import React from 'react'
import CollectionItem from '../../component/collection-item/collection-item.component'

import {connect} from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'

import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
  } from './collection.style'

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return (
    <CollectionPageContainer>
        <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
        <CollectionItemsContainer>
            {items.map(item => <CollectionItem key={item.id} item={item} />)}
        </CollectionItemsContainer>
    </CollectionPageContainer>
    
)}

const mapStateToProps = (state, ownProps) => ({
    collection : selectCollection(ownProps.match.params.collectionID)(state)
})

export default connect(mapStateToProps)(CollectionPage);