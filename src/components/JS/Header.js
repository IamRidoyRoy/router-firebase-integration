import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Header.css'
import useFirebase from '../Hooks/useFirebase';
const Header = () => {
    const { user, handleSignOut } = useFirebase()
    return (
        <div className='header' >
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/login'>Products</Link>
                <Link to='/login'>Orders</Link>
                <Link to='/login'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={handleSignOut}>Signout</button>
                        :
                        <Link to='/login'>Login</Link>

                }
            </nav>
        </div>
    );
};

export default Header;