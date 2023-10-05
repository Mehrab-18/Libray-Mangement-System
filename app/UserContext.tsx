import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the user object type

const UserContext = createContext<any>('null');

export const useUserObj = () => {
  return useContext(UserContext);
};
// Create a provider component
export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<any>('null');
  const [isLoggedIn, setIsLoggedIn] = useState<any>(false);

  const setUserObj = (obj: any) => {
    setUser(obj);
    setIsLoggedIn(true);
  };

  const removeUserObj = (obj: any) => {
    setUser(null);
    setIsLoggedIn(false);
  };

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, setUserObj, removeUserObj }}
    >
      {children}
    </UserContext.Provider>
  );
}
