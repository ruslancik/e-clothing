import React from 'react'
import {Link} from 'react-router-dom'
import  logo from '../../assets/logo.png'
import './header.component.scss'

const Header = () => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
               <img className='logo' src={logo} alt="logo" />
            </Link>
            <div className="options">
                <Link className='option' to='/shop'>Shop</Link>
                <Link className='option' to='/contact'>Contact</Link>
            </div>
         </div>
    )
}

export default Header