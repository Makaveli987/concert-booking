import { call, put, takeEvery } from "redux-saga/effects";
import { REGISTER_USER, SET_USER, SET_REGISTER_ERROR_MESSAGE } from "./reducer";
import app from "../../base";
import {
  request,
  fbRegisterUser,
  fbSignIn,
  fbSignOut,
  fbGetUserByEmail,
  updateUserName,
} from "../../request";

function* registerUser(action) {
  try {
    // console.log(action);
    const response = yield app
      .auth()
      .createUserWithEmailAndPassword(
        action.payload.email,
        action.payload.password
      )
      .then((user) => {
        const currentUser = app.auth().currentUser;

        if (currentUser) {
          currentUser
            .updateProfile({
              displayName: action.payload.name,
            })
            .then((user) => {
              return user;
            })
            .catch(function (error) {
              console.log(error);
            });
        }
        return user;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    if (response.message) {
      yield put({
        type: SET_REGISTER_ERROR_MESSAGE,
        payload: response.message,
      });
    }
    yield put({
      type: SET_USER,
      payload: { name: action.payload.name, email: response.user.email },
    });

    yield put({
      type: SET_REGISTER_ERROR_MESSAGE,
      payload: "",
    });

    console.log("response", response);
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* appSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
}

export default appSaga;
