import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const auth = getAuth()
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    return (
        <div>
            <h1>Please Log in</h1>
            <div>
                <button onClick={() => signInWithGoogle()}>Sign in with google</button>
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