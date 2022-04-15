import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h1>Hey babe i am from home!</h1>
            <p>Current user is : {user ? user.displayName : ' Nobody exists!'}</p>
        </div>
    );
};

export default Home;