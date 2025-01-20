import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { addUserToDatabase } from "../../utils/api";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Monitor auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = {
          uid: currentUser.uid,
          email: currentUser.email,
          displayName: currentUser.displayName || "Anonymous",
          photoURL: currentUser.photoURL || "",
        };
  
        try {
          await addUserToDatabase(userData);
          console.log("User synced with database.");
        } catch (error) {
          console.error("Error syncing user with database:", error);
        }
      }
  
      setUser(currentUser); 
      setLoading(false);
    });
  
    return () => unsubscribe();
  }, []);

  // Register user
//   const registerUser = (email, password) => {
//     setLoading(true);
//     return createUserWithEmailAndPassword(auth, email, password);
//   };

  // Login user
//   const loginUser = (email, password) => {
//     setLoading(true);
//     signInWithEmailAndPassword(auth, email, password)
//     .then(() => {
//       return signInWithEmailAndPassword(auth, email, password);
//     })
//     .catch((error) => {
//         console.log(error)
//         return false;
//     });
//   };

  // Google login
//   const googleLogin = () => {
//     setLoading(true);
//     const provider = new GoogleAuthProvider();
  
//     return signInWithPopup(auth, provider)
//   };
  

  // Logout user
  const logoutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    // registerUser,
    // loginUser,
    // googleLogin,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
