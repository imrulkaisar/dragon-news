import { createContext, useEffect, useState } from "react";
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

import auth from "../Authentications/FirebaseConfig";

export const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = (data) => {
    updateProfile(auth.currentUser, data);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log("Logged In:", response.user);
      })
      .catch((error) => console.error(error));
  };

  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => console.log("Logged in with google"))
      .catch((error) => console.error(error));
  };
  const loginWithGithub = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((response) => console.log("Logged in github"))
      .catch((error) => console.error(error));
  };

  const logOut = () => {
    signOut(auth)
      .then((res) => {
        console.log("Logged Out", res.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        console.log("Current user:", currentUser);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userInfo = {
    user,
    createUser,
    updateUser,
    login,
    loginWithGoogle,
    loginWithGithub,
    logOut,
  };

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
