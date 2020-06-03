import React from 'react'
import { withRouter } from 'react-router-dom'

//style
import {
    MenuItemContainer,
    BckgrndContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle} from './menu-item.style'

const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    console.log(imageUrl)
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BckgrndContainer className='background-image' imageUrl={imageUrl}/>
            <ContentContainer className='content'>
                <ContentTitle>{title}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )

}

// this withRouter(MenuItem) has access to related with  our router 
export default withRouter(MenuItem)

