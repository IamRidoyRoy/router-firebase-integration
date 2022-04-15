// import userEvent from '@testing-library/user-event';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import '../CSS/Header.css'
// import useFirebase from '../Hooks/useFirebase';
const auth = getAuth(app)
const Header = () => {
    // const { user, handleSignOut } = useFirebase()

    const [user] = useAuthState(auth)
    return (
        <div className='header' >
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/'>Reviews</Link>
                <Link to='/register'>Register</Link>
                <span>{user?.displayName && user.displayName}</span>
                {
                    user?.uid ?
                        <button onClick={() => signOut(auth)}>Signout</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header; 