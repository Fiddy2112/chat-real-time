import React, { useEffect } from "react";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  let navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log({ user });
      if (user) {
        // gio se lay ra cac thong tin can thiet cua user
        const { displayName, email, uid, photoURL } = user;

        setUser({ displayName, email, uid, photoURL });
        // is success completed
        setLoading(false);

        navigate("/");
        return;
      }
      setLoading(false);

      navigate("/login");
    });

    //clean function
    return () => {
      unsubscribe();
    };
  }, [navigate]);
  return (
    <AuthContext.Provider value={{ user }}>
      {loading ? <Skeleton /> : children}
      {/* {children} */}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
