import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const AuthProvider = ({ children }) => {
  const[user, setUser] = useState(null);
  const[loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, provider)
  }


//! :Not working
  // const updateUserProfile = (displayName, photoURL) => {
  //     return updateProfile(auth.currentUser, {
  //       displayName: displayName,
  //       photoURL: photoURL,
  //     });
  //   };

  const logOutUser = () =>{
    setLoading(true);
    return signOut(auth);
  }

   useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth, loggedUser =>{
      // console.log('on auth state change inside the outh', loggedUser);
        setUser(loggedUser);
        setLoading(false);
      });

      return () =>{
        unsubscribe();
      }
   },[])

  
  const authInfo = {
    user,
    loading,
    createUser,
    signInUser,
    logOutUser,
    googleLogin
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
