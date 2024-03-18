import React, { createContext, useContext, useState } from 'react';

// Creating a context
export const StateContext = createContext();

// A custom hook to use the context
export const useStateContext = () => useContext(StateContext);

// Provider component to wrap the app
export const StateProvider = ({ children }) => {
  const [display, setdisplay] = useState(false);

  return (
    <StateContext.Provider value={{ display , setdisplay }}>
      {children}
    </StateContext.Provider>
  );
};
