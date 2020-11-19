import { createAction } from "redux-actions";

export const GET_USERS = "GET_USERS";
export const SET_USERS = "SET_USERS";

const initialState = {
  value: 0,
  users: [],
};

function globalReducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case SET_USERS:
      console.log("SET_USERS");
      return { users: action.payload };
    default:
      return state;
  }
}

export default globalReducer;

export const getUsers = createAction(GET_USERS);
