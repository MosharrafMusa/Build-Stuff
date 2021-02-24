import React from 'react'
import propTypes from 'prop-types'

const Navbar = ({icon, title})=> {
    
        return (
            <nav className='navbar bg-primary'>
            <h1>
            <i className = {icon} /> {title}</h1> 
            </nav>
        )
    }


Navbar.deafultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}
Navbar.namepropTypes ={
    title : propTypes.string.isRequired
}
export default Navbar
