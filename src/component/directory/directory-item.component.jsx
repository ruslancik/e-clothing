import React from 'react'
import MenuItem from '../menu-item/menu-item.component'
import {connect}  from 'react-redux'
import {selectDirectorySections} from '../..//redux/directory/directory.selector'
//style
import {DirectoryMenuContainer} from './directory-item.style'

const Directory = ({sections}) => (   
  
    <DirectoryMenuContainer>
        {sections.map(({title, id, imageUrl,size, linkUrl}) => {
            return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
        })}              
    </DirectoryMenuContainer>
)

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
  })

export default connect(mapStateToProps)(Directory)