import React from 'react';
import useFirebase from '../Hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h1>Please Log in</h1>
            <div>
                <button onClick={signInWithGoogle}>Sign in with google</button>
            </div><br />
            <form>
                <input type="email" placeholder='Your email' /><br />
                <input type='password' placeholder='Password'></input><br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Login;