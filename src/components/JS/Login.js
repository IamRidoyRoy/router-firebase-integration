import React from 'react';

const Login = () => {
    return (
        <div>
            <h1>Please Log in</h1>
            <div>
                <button>Sign in with google</button>
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