import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
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

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {

            })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    return { user, signInWithGoogle, handleSignOut };

};

export default useFirebase;