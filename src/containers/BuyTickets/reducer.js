import { createAction } from "redux-actions";

export const TOGGLE_LOGIN = "TOGGLE_LOGIN";
export const TOGGLE_REGISTER = "TOGGLE_REGISTER";
export const TOGGLE_RESERVED_SEAT = "TOGGLE_RESERVED_SEAT";
export const GET_INIT = "GET_INIT";

const initialState = {
  isLoginOpen: false,
  isRegisterOpen: false,
  isReservedSeatOpen: false,
};

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case TOGGLE_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    case TOGGLE_RESERVED_SEAT:
      return { ...state, isReservedSeatOpen: action.payload };
    default:
      return state;
  }
}

export default ticketsReducer;

export const toggleLogin = createAction(TOGGLE_LOGIN);
export const toggleRegister = createAction(TOGGLE_REGISTER);
export const toggleReservedSeat = createAction(TOGGLE_RESERVED_SEAT);
// export const getInit = createAction(OPEN_SIGN_IN);
