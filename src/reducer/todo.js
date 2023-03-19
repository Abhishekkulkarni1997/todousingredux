import { ADD_TODO, REMOVE_TODO } from "../action/action.types";

const initialState = [];

/* export default function todo(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
} */

export const todos = (state = initialState, action) => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};
