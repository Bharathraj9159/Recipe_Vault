// import hooks form the react
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// check that token is generate or not

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("token") ? { email: "chef@demo.com" } : null
  );

  // check with that login credentials 
  const login = (email, password) => {
    if (email === "bharath@demo.com" && password === "cook123") {
      localStorage.setItem("token", "token-created");
      setUser({ email });
      return true;
    }
    return false;
  };

  // deleting the tokens when get loggd out
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);