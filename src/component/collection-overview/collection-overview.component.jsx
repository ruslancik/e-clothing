import React from 'react'

import CollectionPreview from '../collection-preview/collection-preview.component'

import {connect} from 'react-redux'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'

//style
import { CollectionsOverviewContainer } from './collection-overview.style';

const CollectionOverview = ({collections}) => (
    <CollectionsOverviewContainer>

       {   collections.map( collection => (
              <CollectionPreview
               key={collection.id}
               title={collection.title}
               items={collection.items} />
            ))}
    </CollectionsOverviewContainer>
)

const mapStateToProps = state => ({
    collections : selectCollectionForPreview(state)

})

export default connect(mapStateToProps)(CollectionOverview);