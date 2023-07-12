import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();



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
  const resetPassword = (email) =>{
    return sendPasswordResetEmail(auth, email)
  }

  const googleLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  };
  const githubLogin = () =>{
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };


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
    resetPassword,
    googleLogin,
    githubLogin,

    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
