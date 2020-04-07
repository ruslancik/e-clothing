import React, { Component } from 'react'
import './shop.component.scss'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../component/collection-preview/collection-preview.component'

export class ShopPage extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             collections: SHOP_DATA
        }
    }
    
    render() {
        const {collections} = this.state
        return (<div>
          { 
           collections.map( collection => (
              <CollectionPreview
               key={collection.id}
               title={collection.title}
               items={collection.items} />
            ))
            }
            </div>);
    }
}

export default ShopPage
