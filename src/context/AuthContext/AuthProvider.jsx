import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logIn = (email, password) => {
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (userName, photoURL) =>{
        return updateProfile(auth.currentUser, {displayName: userName, photoURL: photoURL})
    }

    const googleLogIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setUser(currentUser)
            } else {
                setUser(null)
            }
            setIsLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        isLoading,
        googleLogIn,
        createUser,
        updateUserProfile,
        logIn,
        logOut
    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;