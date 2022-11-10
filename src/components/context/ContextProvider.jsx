import React, {createContext, useEffect, useState} from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider,onAuthStateChanged,signInWithEmailAndPassword,signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/FirebaseAuth';
export const userContext = createContext();
const ContextProvider = ({children}) => {
    const [user,setUser] = useState();
    const [isloding,setLoding] = useState(true);
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    // google signIn
    const googleSignIn=()=>{
        setLoding(true)
        return signInWithPopup(auth,provider)};

    // sign in with email and password
    const CreateUser=(email,password)=> {
        setLoding(true)
        return createUserWithEmailAndPassword(auth,email,password)};

    // login with email and password
    const login=(email,password)=>
        {
            setLoding(true);
            return signInWithEmailAndPassword(auth,email,password)};
       
    // updata user
    const updateUser=(profile)=> updateProfile(auth.currentUser,profile);


    // logOut user
    const logout=()=>{
        localStorage.removeItem('photographyToken')
        return signOut(auth)}; 

    // get Current User
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth, (currentuser) => {
            setUser(currentuser)
            setLoding(false)
        })
        return unsubscribe;
    },[])

    const authInfo={user,googleSignIn,CreateUser,login,updateUser,isloding,logout};
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default ContextProvider;