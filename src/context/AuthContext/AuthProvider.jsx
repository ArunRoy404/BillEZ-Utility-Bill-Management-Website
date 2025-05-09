import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';

const AuthProvider = ({ children }) => {

    const [balance, setBalance] = useState(10000)
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

    const updateUserProfile = (updateInfo) =>{

        return updateProfile(auth.currentUser, updateInfo)
    }

    const reloadUser = async() =>{
        setIsLoading(true)
        await auth.currentUser.reload().then(()=>{setIsLoading(false)})
        setUser({...auth.currentUser})
    }

    const googleLogIn = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setIsLoading(true)
        return signOut(auth)
    } 

    const resetPass = (email) =>{
        return sendPasswordResetEmail(auth, email)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            if (currentUser) {
                setBalance(10000)
                setUser({...currentUser})
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
        reloadUser,
        logIn,
        logOut,
        balance,
        setBalance,
        resetPass
    }



    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;