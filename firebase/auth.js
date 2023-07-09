import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut as authSignOut } from "firebase/auth";
import { firebaseAuth } from "./firebase";

const AuthUserContext = createContext({
  authUser: null,
  isLoading: true,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setIsLoading(false);
  };

  const authStateChanged = async (user) => {
    setIsLoading(true);
    if (!user) {
      clear();
      return;
    }
    setAuthUser({
      uid: user.uid,
      email: user.email,
      username: user.displayName,
    });
    localStorage.setItem(
      "loggedInUserInfo",
      JSON.stringify({
        uid: user.uid,
        email: user.email,
        username: user.displayName,
      })
    );
    setIsLoading(false);
  };

  const signOut = () => {
    authSignOut(firebaseAuth).then(() => clear());
    setIsLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    signOut,
    setAuthUser,
  };
}

export const AuthUserProvider = ({ children }) => {
  const auth = useFirebaseAuth();
  return (
    <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
  );
};

export const useAuth = () => useContext(AuthUserContext);
