import { call, put, takeEvery } from "redux-saga/effects";
import { REGISTER_USER } from "./reducer";
import { request, fbRegisterUser, fbSignIn, fbSignOut } from "../../request";

function* registerUser(action) {
  try {
    console.log(action);
    const response = yield call(
      fbRegisterUser,
      action.payload.name,
      action.payload.email,
      action.payload.password
    );
    console.log("response", response);
    //   yield put({ type: "SET_USERS", users: users });
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* appSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export default appSaga;
