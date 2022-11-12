import React from "react";
import { BlogType } from "../utils/utils";

type initialStateType = {
  data: BlogType[];
  selectedItem: string;
  authenticated: boolean;
};

const initialState: initialStateType = {
  data: [],
  selectedItem: "",
  authenticated: false,
};

export const dataContext = React.createContext<any>(initialState);

export const DataContextProvider = (props: any) => {
  const [data, dataDispatch] = React.useReducer((state: any, action: any) => {
    if (action.type === "add") return { ...state, data: action.payload };
    else return state;
  }, initialState.data);

  const [selectedItem, selectDispatch] = React.useReducer(
    (state: any, action: any) => {
      if (action.type === "set-item")
        return { ...state, selectedItem: action.payload };
      else return state;
    },
    initialState.selectedItem
  );

  const [authenticated, authDispatch] = React.useReducer(
    (state: any, action: any) => {
      if (action.type === "toggle-auth")
        return { ...state, authenticated: action.payload };
      else return state;
    },
    initialState.authenticated
  );

  return (
    <dataContext.Provider
      value={{
        data,
        authenticated,
        selectedItem,
        dataDispatch,
        authDispatch,
        selectDispatch,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};
