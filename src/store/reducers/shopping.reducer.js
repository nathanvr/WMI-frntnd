import { sendStatusCode } from "next/dist/server/api-utils";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ONE = "ADD_TO_CART";

const initialState = {
  cart: [],
};

export const addItem = (data) => {
  return (dispatch) => {
    dispatch({ type: ADD_TO_CART, payload: data });
  };
};
const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default shoppingReducer;
