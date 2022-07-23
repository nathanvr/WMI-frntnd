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
        baseURL: "http://localhost:8080/user/getid",
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

    default:
      return state;
  }
};

export default userReducer;
