import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import {Link} from 'react-router-dom'

//style 
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.style'

const CollectionPreview = ({title, items, id }) => {
    return (
        <CollectionPreviewContainer>
            <TitleContainer><Link to={`shop/${title.toLowerCase()}`}>{title.toUpperCase()}</Link></TitleContainer>
            <PreviewContainer>
              {
              items.filter((item, index) => index < 4).map(item => (
                  <CollectionItem key={item.id} item={item} />
              ))
              }
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview
