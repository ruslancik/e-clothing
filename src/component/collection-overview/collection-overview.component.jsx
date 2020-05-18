import React from 'react'
import './collection-overview.component.scss'

import CollectionPreview from '../collection-preview/collection-preview.component'

import {connect} from 'react-redux'
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'

const CollectionOverview = ({collections}) => (
    <div className="collection-overview">

       {   collections.map( collection => (
              <CollectionPreview
               key={collection.id}
               title={collection.title}
               items={collection.items} />
            ))}
    </div>
)

const mapStateToProps = state => ({
    collections : selectCollectionForPreview(state)

})

export default connect(mapStateToProps)(CollectionOverview);