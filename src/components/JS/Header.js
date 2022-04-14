import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'
const Header = () => {
    return (
        <div className='header' >
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Products</Link>
                <Link to='/login'>Orders</Link>
                <Link to='/login'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
            </nav>
        </div>
    );
};

export default Header;