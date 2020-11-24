import { call, put, takeEvery } from "redux-saga/effects";
import {
  REGISTER_USER,
  SET_ERROR_MESSAGE,
  SIGNIN_USER,
  SIGNOUT_USER,
} from "./reducer";
import app from "../../base";
import { request } from "../../request";

function* registerUser(action) {
  try {
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
        type: SET_ERROR_MESSAGE,
        payload: response.message,
      });
    } else {
      yield localStorage.setItem("username", action.payload.name);
      yield localStorage.setItem("email", response.user.email);
      yield window.location.reload(false);

      yield put({
        type: SET_ERROR_MESSAGE,
        payload: "",
      });
    }

    console.log("response", response);
  } catch (e) {
    yield put({ type: "USER_FETCH_FAILED", message: e.message });
  }
}

function* signInUser(action) {
  try {
    const response = yield app
      .auth()
      .signInWithEmailAndPassword(action.payload.email, action.payload.password)
      .then(function (result) {
        console.log("signed in");
        console.log("result", result);
        return result;
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });

    if (response.message) {
      yield put({
        type: SET_ERROR_MESSAGE,
        payload: response.message,
      });
    } else {
      yield localStorage.setItem("username", response.user.displayName);
      yield localStorage.setItem("email", response.user.email);
      yield window.location.reload(false);

      yield put({
        type: SET_ERROR_MESSAGE,
        payload: "",
      });
    }

    console.log(response);
  } catch (error) {}
}

function* signOutUser(action) {
  try {
    const response = yield app
      .auth()
      .signOut()
      .then(function () {
        localStorage.clear();
      })
      .catch(function (error) {
        console.log(error);
        return error;
      });
    yield window.location.reload(false);
  } catch (error) {
    return error;
  }
}

function* appSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
  yield takeEvery(SIGNIN_USER, signInUser);
  yield takeEvery(SIGNOUT_USER, signOutUser);
}

export default appSaga;
