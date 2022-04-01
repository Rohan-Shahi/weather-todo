import React, { useReducer } from "react";
import { ColorContext } from "./colorContext";
import { ColorReducer } from "./colorReducer";

const initalState = {
  color: "#ffffff",
};

export default function ColorState({ children }) {
  const [state, dispatch] = useReducer(ColorReducer, initalState);
  return (
    <ColorContext.Provider value={{ color: state.color, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
}
