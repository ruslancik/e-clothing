import React from 'react'
import './directory-item.component.scss'
import MenuItem from '../menu-item/menu-item.component'
import {connect}  from 'react-redux'
import {selectDirectorySections} from '../..//redux/directory/directory.selector'

const Directory = ({sections}) => (   
  
    <div className="directory-menu">
        {sections.map(({title, id, imageUrl,size, linkUrl}) => {
            return <MenuItem key={id} title={title} img={imageUrl} size={size} linkUrl={linkUrl} />
        })}              
    </div>
)

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
  })

export default connect(mapStateToProps)(Directory)