import axios from "axios";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import auth from "./../config/firebase.config";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth,githubProvider)
  }

  const emailPasswordRegister = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
  }

  const emailPasswordLogin = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (name,photo) => {
    return updateProfile(auth.currentUser,{
      displayName: name,
      photoURL: photo
    })
  }

  const logOut = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth,async (currentUser) => {
      const email = currentUser?.email || user?.email;
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
       const {data} = await axios.get(`${import.meta.env.VITE_SERVER_API}/user/${email}`,{withCredentials:true})
        await axios.post(`${import.meta.env.VITE_SERVER_API}/jwt`,{email:email,role:data?.role},{withCredentials:true})
      }else{
        await axios.post(`${import.meta.env.VITE_SERVER_API}/logout`,{email:email},{withCredentials:true})
      }
    });
    return () => unSubscribe();
  }, [user]);

  const authInfo = { googleLogin,user,loading,logOut,emailPasswordRegister,updateUser,emailPasswordLogin,githubLogin,setUser };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
      <Toaster position="top-right" reverseOrder={true} />
    </AuthContext.Provider>
  );
};

export default AuthProvider;
