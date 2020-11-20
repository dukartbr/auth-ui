import React from 'react';
import { auth } from '../firebase';

const AuthContext = React.createContext({});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  let [currentUser, setCurrentUser] = React.useState(null);

  const signUp = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  React.useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      // @ts-ignore
      setCurrentUser(user);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signUp,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
