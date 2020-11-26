import { call, put, takeEvery } from "redux-saga/effects";
import {
  REGISTER_USER,
  SET_ERROR_MESSAGE,
  SIGNIN_USER,
  SIGNOUT_USER,
  GET_SEATS,
  SET_VIP_SEATS,
  SET_FLOOR_SEATS,
  SET_RIGHT_BALCONY_SEATS,
  SET_LEFT_BALCONY_SEATS,
} from "./reducer";
import { app } from "../../base";
import { request } from "../../request";
import { GET_SEATS_URL, GET_USERS_URL } from "./constants";

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
      yield localStorage.setItem("uid", response.user.uid);
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
      yield localStorage.setItem("uid", response.user.uid);
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

function* getSeats(action) {
  try {
    const response = yield call(request, GET_SEATS_URL, {
      method: "GET",
    });

    yield console.log(response);
    yield put({ type: SET_VIP_SEATS, payload: response.seats.vip });
    yield put({ type: SET_FLOOR_SEATS, payload: response.seats.floor });
    yield put({
      type: SET_LEFT_BALCONY_SEATS,
      payload: response.seats.leftBalcony,
    });
    yield put({
      type: SET_RIGHT_BALCONY_SEATS,
      payload: response.seats.rightBalcony,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error,
    });
  }
}

function* appSaga() {
  yield takeEvery(REGISTER_USER, registerUser);
  yield takeEvery(SIGNIN_USER, signInUser);
  yield takeEvery(SIGNOUT_USER, signOutUser);
  yield takeEvery(GET_SEATS, getSeats);
}

export default appSaga;
