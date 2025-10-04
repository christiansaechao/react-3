import { useState, createContext, useContext } from "react";

// first step is to create a context
const UserContext = createContext();

// second step create provider component

export const UserProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  return <UserContext value={{ theme, setTheme }}>{children}</UserContext>;
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) throw new Error("You have to use this in a provider");

  return context;
};
