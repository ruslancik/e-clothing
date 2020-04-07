import React from 'react'
import './collection-preview.component.scss'

const CollectionPreview = ({title, items, id }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title}</h1>
            <div className="preview">
              {
              items.filter((item, index) => index < 4).map(item => (
                  <div key={item.id}>
                      <img src={item.imageUrl} alt={item.name}/>
                      <span>{item.name}</span>
                      </div>
              ))
              }
            </div>
        </div>
    )
}

export default CollectionPreview
