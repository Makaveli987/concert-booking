import { call, put, takeEvery } from "redux-saga/effects";
import { TOGGLE_LOGIN } from "./reducer";
import request from "../../request";

function* getInit(action) {
  console.log("saga");
  // try {
  //   const users = yield call(
  //     request,
  //     "https://jsonplaceholder.typicode.com/users",
  //     {
  //       method: "GET",
  //     }
  //   );
  //   console.log(users);
  //   yield put({ type: TOGGLE_SIGN_IN, users: users });
  // } catch (e) {
  //   yield put({ type: "USER_FETCH_FAILED", message: e.message });
  // }
}

function* appSaga() {
  yield takeEvery(TOGGLE_LOGIN, getInit);
}

export default appSaga;
