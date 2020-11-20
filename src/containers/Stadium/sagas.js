import { call, put, takeEvery } from "redux-saga/effects";
import { GET_USERS } from "./reducer";
import request from "../../request";

function* getUsers(action) {
  try {
    const users = yield call(
      request,
      "https://jsonplaceholder.typicode.com/users",
      {
        method: "GET",
      }
    );
    console.log(users);
    yield put({ type: "SET_USERS", users: users });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* appSaga() {
  yield takeEvery(GET_USERS, getUsers);
}

export default appSaga;
