import "../styles/globals.scss";
import { store, wrapper } from "../store/index";
import { Provider } from "react-redux";
import { getUser } from "../store/reducers/user.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  let token;

  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
