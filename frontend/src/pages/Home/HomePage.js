import React, { useReducer } from "react";

const initialState = { foods: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "FOODS_LOADED":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};

export default function Homepage() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { foods } = state;
  return <div>Homepage</div>;
}
//part 4  7:57