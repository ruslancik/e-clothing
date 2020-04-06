import React from 'react'
import './menu-item.component.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({title, img, size, history, linkUrl, match}) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}.${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${img})`}}></div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

// this withRouter(MenuItem) has access to related with  our router 
export default withRouter(MenuItem)


