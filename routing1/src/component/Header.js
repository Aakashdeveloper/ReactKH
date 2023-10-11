import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
         <h1>Header</h1>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
        </>
       
    )
}

export default Header;