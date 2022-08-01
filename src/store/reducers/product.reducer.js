import axios from "axios";

export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_LOADING = "PRODUCT_LOADING";

export const PRODUCT_QTY_INCREMENT = "PRODUCT_QTY_INCREMENT";
export const PRODUCT_QTY_DECREMENT = "PRODUCT_QTY_DECREMENT";

export const getProduct = (id) => {
  const url = process.env.NEXT_PUBLIC_PRODUCTS_FETCH_URL;
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        baseURL: `http://localhost:8080/product/${id}`,
      });
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error });
    } finally {
      dispatch({ type: PRODUCT_LOADING, payload: false });
    }
  };
};

const initialState = {
  loading: true,
  error: null,
  product: {},
  qty: 1,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case PRODUCT_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };

    case PRODUCT_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case PRODUCT_QTY_INCREMENT:
      return {
        ...state,
        qty: state.qty + 1,
      };

    case PRODUCT_QTY_DECREMENT:
      return {
        ...state,
        qty: state.qty - 1,
      };

    default:
      return state;
  }
};

export default productReducer;
