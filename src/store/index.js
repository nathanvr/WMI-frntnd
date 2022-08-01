import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products.reducer";
import productReducer from "./reducers/product.reducer";
import userReducer from "./reducers/user.reducer";
import shoppingReducer from "./reducers/shopping.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";

const middleware = [thunk];

const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  userReducer,
  shoppingReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);
