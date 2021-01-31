// Now We will think why we need this StateProvider it is used for DTAT LAYER ->REACT Context API
// Suppose user click on basket then will be store somewhere and should eb added in baket componemt so for this purpose we use this

import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);