import React, { createContext, useContext, useReducer } from "react";

// Creating data layer 
export const StateContext = createContext();


// Wrap app and provide data layer 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


// pull info from data layer 
export const useStateValue = () => useContext(StateContext);