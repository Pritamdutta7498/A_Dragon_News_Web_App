import React, { useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const[user, setUser] = useState(null);


  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };


//! :Not working
  // const updateUserProfile = (displayName, photoURL) => {
  //     return updateProfile(auth.currentUser, {
  //       displayName: displayName,
  //       photoURL: photoURL,
  //     });
  //   };

  const logOutUser = () =>{
   return signOut(auth);
  }

   useEffect(()=>{
    const unsubscribe =   onAuthStateChanged(auth, loggedUser =>{
      // console.log('on auth state change inside the outh', loggedUser);
        setUser(loggedUser);
      });

      return () =>{
        unsubscribe();
      }
   },[])

  
  const authInfo = {
    user,
    createUser,
    signInUser,
    logOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
