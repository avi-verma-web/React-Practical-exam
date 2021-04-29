import React, { createContext } from "react";
import UserAPI from "./api/UserApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  let state=UserAPI()
  console.log(state.user[0])


  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
