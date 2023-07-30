import React from "react";
import { INPUT_TEXT } from "./types";

const initialState = {
  text: "Description for the photo...",
};
export const inputReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TEXT:
    return {
      ...state,
      text: action.text
    }
    default:
      return state;
  }
};
