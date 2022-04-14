import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../firebase.init';

const useFirebase = () => {
    const [user, setUser] = useState({})

    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user);
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return { user, signInWithGoogle };

};

export default useFirebase;