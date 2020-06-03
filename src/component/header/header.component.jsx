import React from 'react'
import  logo from '../../assets/logo.png'
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
//style
import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionLink,
    UserGreeting
} from './header.style'


const Header = ({currentUser, hidden}) => {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
               <img className='logo' src={logo} alt="logo" />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>Shop</OptionLink>
                <OptionLink to='/contact'>Contact</OptionLink>
                {
                    currentUser ?
                    <>
                    <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>
                    <UserGreeting>{`Hi, ${currentUser.displayName}`}</UserGreeting>
                    </>
                    :
                    <OptionLink to='/signin'>Sign In</OptionLink>

                }
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropdown/>
            }
         </HeaderContainer>
    )
}

// destructing currentUser and hidden 
// currentUser : state.user.currentUser
const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);