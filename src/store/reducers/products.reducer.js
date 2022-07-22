import axios from "axios";

export const PRODUCTS_SUCCESS = "PRODUCTS_SUCCESS";
export const PRODUCTS_ERROR = "PRODUCTS_ERROR";
export const PRODUCTS_LOADING = "PRODUCTS_LOADING";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: PRODUCTS_LOADING, payload: true });
      const dataProducts = await axios({
        method: "GET",
        baseURL:
          process.env.NEXT_PUBLIC_PRODUCTS_FETCH_URL ||
          "http://localhost:8080/product",
      });
      dispatch({ type: PRODUCTS_SUCCESS, payload: dataProducts.data.data });
    } catch (error) {
      dispatch({ type: PRODUCTS_ERROR, payload: error });
    } finally {
      dispatch({ type: PRODUCTS_LOADING, payload: false });
    }
  };
};

const initialState = {
  loading: false,
  error: null,
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCTS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };

    case PRODUCTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productsReducer;
