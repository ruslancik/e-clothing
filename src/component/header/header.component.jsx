import React from 'react'
import {Link} from 'react-router-dom'
import  logo from '../../assets/logo.png'
import './header.component.scss'
import {auth} from '../../firebase/firebase.utils'
import { connect } from 'react-redux'

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
               <img className='logo' src={logo} alt="logo" />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
                {
                    currentUser ?
                    <>
                    <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
                    <div className='userGreeting'>{`Hi, ${currentUser.displayName}`}</div>
                    </>
                    :
                    <Link className='option' to='/signin'>Sign In</Link>
                    
                }
            </div>
         </div>
    )
}


const mapStateToProps = (state) => ({
    ...state,
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);