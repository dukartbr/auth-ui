import React from 'react';
import { auth } from '../firebase';
import { useBasicUser } from '../store';

const AuthContext = React.createContext({});

export const useAuth: any = () => React.useContext(AuthContext);

export const AuthProvider = ({ children }: any) => {
  let { toggleLoginUser } = useBasicUser();
  let [currentUser, setCurrentUser] = React.useState(null);
  let [loading, setLoading] = React.useState(true);

  const signUp = (email: string, password: string) => {
    auth.createUserWithEmailAndPassword(email, password);
  };

  const signIn = (email: string, password: string) => {
    let res = auth.signInWithEmailAndPassword(email, password);
    toggleLoginUser(res);
    console.log('res', res);
  };

  const signOut = () => {
    auth.signOut();
    toggleLoginUser(null);
  };

  React.useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      // @ts-ignore
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubcribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
