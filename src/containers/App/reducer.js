import { createAction } from "redux-actions";

export const TOGGLE_LOGIN = "TOGGLE_LOGIN";
export const TOGGLE_REGISTER = "TOGGLE_REGISTER";
export const TOGGLE_RESERVED_SEAT = "TOGGLE_RESERVED_SEAT";
export const REGISTER_USER = "REGISTER_USER";
export const SIGNIN_USER = "SIGIN_USER";
export const SIGNOUT_USER = "SIGNOUT";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_USER = "SET_USER";

const initialState = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isReservedSeatOpen: false,
  errorMessage: "",
  user: null,
};

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case TOGGLE_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    case TOGGLE_RESERVED_SEAT:
      return { ...state, isReservedSeatOpen: action.payload };
    case SET_ERROR_MESSAGE:
      console.log(action.payload);
      return { ...state, errorMessage: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}

export default ticketsReducer;

export const toggleLogin = createAction(TOGGLE_LOGIN);
export const toggleRegister = createAction(TOGGLE_REGISTER);
export const toggleReservedSeat = createAction(TOGGLE_RESERVED_SEAT);
export const registerUser = createAction(REGISTER_USER);
export const signInUser = createAction(SIGNIN_USER);
export const signOutUser = createAction(SIGNOUT_USER);
export const setErrorMessage = createAction(SET_ERROR_MESSAGE);
