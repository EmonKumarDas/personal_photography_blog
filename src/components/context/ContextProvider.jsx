import React, {createContext, useEffect, useState} from 'react';
import { getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/FirebaseAuth';
export const userContext = createContext();
const ContextProvider = ({children}) => {
    const [user,setUser] = useState();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    // google signIn
    const googleSignIn=()=>signInWithPopup(auth,provider);

    // logOut user
    const logout=()=>signOut(auth); 

    // get Current User
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (user) => {
            setUser(user)
        })
        return unsubscribe;
    },[])

    const authInfo={user,googleSignIn,logout};
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default ContextProvider;