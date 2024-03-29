import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signUpWithGmail = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);

      if (currentUser) {
        const userInfo = { name: currentUser.displayName, email: currentUser.email };

        axios.post("http://localhost:3000/jwt", userInfo)
          .then((response) => {
            if (response.data.token) {
              localStorage.setItem("token", response.data.token);
            }
          })
      } else {
        localStorage.removeItem("token");
      }
        
      setLoading(false);
    });

    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    loading,
    user,
    createUser,
    signUpWithGmail,
    login,
    logout,
    updateUserProfile
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
