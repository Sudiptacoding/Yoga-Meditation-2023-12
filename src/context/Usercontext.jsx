import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../firebase/firebase.config';

export const UserProvider = createContext(null)

import { GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const Usercontext = ({ children }) => {
    const [firstShow, setFirstShow] = useState('')
    const [currentUser, setCurrentUser] = useState(null)
    const [speener, seeSpeener] = useState(true)


    // create user
    const createuser = (email, password) => {
        seeSpeener(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user
    const loginguser = (email, password) => {
        seeSpeener(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogIn = () => {
        seeSpeener(true)
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        seeSpeener(true)
        return signOut(auth)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            seeSpeener(false)
        });
        return () => {
            unSubscribe()
        }
    }, [])


    const sendValue = {
        // current user
        currentUser,

        // first imag
        firstShow,


        // create user
        createuser,
        // login user
        loginguser,
        // google login
        googleLogIn,

        // logout
        logOut,



        // image set
        setFirstShow,
        speener,
    }

    return (
        <UserProvider.Provider value={sendValue}>
            {children}
        </UserProvider.Provider>
    );
};

export default Usercontext;