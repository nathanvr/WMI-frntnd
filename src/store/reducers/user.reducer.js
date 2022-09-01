import axios from "axios";

export const USER_SUCCESS = "USER_SUCCESS";
export const USER_ERROR = "USER_ERROR";
export const USER_LOADING = "USER_LOADING";

export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_ERROR = "AUTH_ERROR";

export const USER_LOGOUT = "USER_LOGOUT";

export const getUser = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios({
        method: "GET",
        baseURL: "https://wmi-col.herokuapp.com/user/getid",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const user = res.data.data;
      //   console.log("user", user);
      dispatch({ type: USER_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const register = (registerState) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://wmi-col.herokuapp.com/user/signup",
        registerState
      );
      //   console.log(res.data.data.token);
      localStorage.setItem("token", res.data.data.token);
      dispatch({ type: AUTH_SUCCESS });
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const login = (loginState) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        "https://wmi-col.herokuapp.com/user/signin",
        loginState
      );
      localStorage.setItem("token", res.data.data);
      dispatch({ type: AUTH_SUCCESS });
      dispatch(getUser());
    } catch (error) {
      dispatch({ type: AUTH_ERROR, payload: error });
    }
  };
};

export const logout = () => {
  return {
    type: USER_LOGOUT,
  };
};

const initialState = {
  auth: false,
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SUCCESS:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        auth: true,
        user: action.payload,
      };

    case AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case USER_LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        auth: false,
        user: null,
      };

    default:
      return state;
  }
};

export default userReducer;
