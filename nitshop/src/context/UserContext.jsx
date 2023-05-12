import React, { useState, createContext } from "react";

export const UserContext = createContext({
  user: {},
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
