import { call, put, takeEvery } from "redux-saga/effects";
import uuid from "react-uuid";
import {
  REGISTER_USER,
  SET_ERROR_MESSAGE,
  TOGGLE_REGISTER,
  TOGGLE_LOGIN,
  SIGNIN_USER,
  SIGNOUT_USER,
  GET_SEATS,
  SET_VIP_SEATS,
  SET_FLOOR_SEATS,
  SET_RIGHT_BALCONY_SEATS,
  SET_LEFT_BALCONY_SEATS,
  GET_QUESTIONS,
  SET_QUESTIONS,
  GET_RESERVED_AND_AVAILABLE_SEATS,
  SET_RESERVED_AND_AVAILABLE_SEATS,
  SET_PROFIT,
  GET_TICKET_INFO,
  SET_TICKET_INFO,
  RESERVE_SEAT,
  SEND_QUESTION,
} from "./reducer";
import { app } from "../../base";
import { request } from "../../request";
import {
  PRICES,
  GET_SEATS_URL,
  GET_ADMIN_USERS_URL,
  GET_QUESTIONS_URL,
  GET_RESERVED_VIP_SEATS_URL,
  GET_AVAILABLE_VIP_SEATS_URL,
  GET_RESERVED_FlOOR_SEATS_URL,
  GET_AVAILABLE_FLOOR_SEATS_URL,
  GET_RESERVED_LEFT_BALCONY_SEATS_URL,
  GET_AVAILABLE_LEFT_BALCONY_SEATS_URL,
  GET_RESERVED_RIGHT_BALCONY_SEATS_URL,
  GET_AVAILABLE_RIGHT_BALCONY_SEATS_URL,
  GET_TICKET_INFO_URL,
  PUT_RESERVED_SEAT_URL,
  SEND_QUESTION_URL,
} from "./constants";

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
      yield put({ type: TOGGLE_REGISTER, payload: true });
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
      yield put({ type: TOGGLE_LOGIN, payload: true });
    } else {
      const admin = yield call(request, GET_ADMIN_USERS_URL, {
        method: "GET",
      });
      yield localStorage.setItem("username", response.user.displayName);
      yield localStorage.setItem("email", response.user.email);
      yield localStorage.setItem("uid", response.user.uid);
      if (response.user.uid === admin.uid) {
        yield localStorage.setItem("isAdmin", true);
        yield window.location.reload(false);
        yield (window.location.pathname = "/dashboard");
      } else {
        yield localStorage.setItem("isAdmin", false);
        yield window.location.reload(false);
      }
      yield put({
        type: SET_ERROR_MESSAGE,
        payload: "",
      });
    }
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
    if (window.location.pathname === "/dashboard") {
      yield (window.location.pathname = "/");
    } else {
      yield window.location.reload(false);
    }
  } catch (error) {
    return error;
  }
}

function* getSeats(action) {
  try {
    const response = yield call(request, GET_SEATS_URL, {
      method: "GET",
    });
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

function* getQuestions(action) {
  try {
    const response = yield call(request, GET_QUESTIONS_URL, {
      method: "GET",
    });
    yield put({ type: SET_QUESTIONS, payload: response });
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error,
    });
  }
}

function* getReservedAndAvailableSeats(action) {
  try {
    const reservedVip = yield call(request, GET_RESERVED_VIP_SEATS_URL, {
      method: "GET",
    });
    const availableVip = yield call(request, GET_AVAILABLE_VIP_SEATS_URL, {
      method: "GET",
    });
    const reservedFloor = yield call(request, GET_RESERVED_FlOOR_SEATS_URL, {
      method: "GET",
    });
    const availableFloor = yield call(request, GET_AVAILABLE_FLOOR_SEATS_URL, {
      method: "GET",
    });

    const reservedLeftBalcony = yield call(
      request,
      GET_RESERVED_LEFT_BALCONY_SEATS_URL,
      {
        method: "GET",
      }
    );

    const availableLeftBalcony = yield call(
      request,
      GET_AVAILABLE_LEFT_BALCONY_SEATS_URL,
      {
        method: "GET",
      }
    );
    const reservedRightBalcony = yield call(
      request,
      GET_RESERVED_RIGHT_BALCONY_SEATS_URL,
      {
        method: "GET",
      }
    );

    const availableRightBalcony = yield call(
      request,
      GET_AVAILABLE_RIGHT_BALCONY_SEATS_URL,
      {
        method: "GET",
      }
    );

    yield put({
      type: SET_RESERVED_AND_AVAILABLE_SEATS,
      payload: {
        reservedSeats: {
          total:
            Object.keys(reservedVip).length +
            Object.keys(reservedFloor).length +
            Object.keys(reservedLeftBalcony).length +
            Object.keys(reservedRightBalcony).length,
          vip: Object.keys(reservedVip).length,
          floor: Object.keys(reservedFloor).length,
          leftBalcony: Object.keys(reservedLeftBalcony).length,
          rightBalcony: Object.keys(reservedRightBalcony).length,
        },
        availableSeats: {
          total:
            Object.keys(availableVip).length +
            Object.keys(availableFloor).length +
            Object.keys(availableLeftBalcony).length +
            Object.keys(availableRightBalcony).length,
          vip: Object.keys(availableVip).length,
          floor: Object.keys(availableFloor).length,
          leftBalcony: Object.keys(availableLeftBalcony).length,
          rightBalcony: Object.keys(availableRightBalcony).length,
        },
      },
    });

    yield put({
      type: SET_PROFIT,
      payload: {
        profit: {
          total:
            Object.keys(reservedVip).length * PRICES.vip +
            Object.keys(reservedFloor).length * PRICES.floor +
            Object.keys(reservedLeftBalcony).length * PRICES.balcony +
            Object.keys(reservedRightBalcony).length * PRICES.balcony,
          vip: Object.keys(reservedVip).length * PRICES.vip,
          floor: Object.keys(reservedFloor).length * PRICES.floor,
          leftBalcony: Object.keys(reservedLeftBalcony).length * PRICES.balcony,
          rightBalcony:
            Object.keys(reservedRightBalcony).length * PRICES.balcony,
        },
        potentialProfitInAvailableSeats: {
          total:
            Object.keys(availableVip).length * PRICES.vip +
            Object.keys(availableFloor).length * PRICES.floor +
            Object.keys(availableLeftBalcony).length * PRICES.balcony +
            Object.keys(availableRightBalcony).length * PRICES.balcony,
          vip: Object.keys(availableVip).length * PRICES.vip,
          floor: Object.keys(availableFloor).length * PRICES.floor,
          leftBalcony:
            Object.keys(availableLeftBalcony).length * PRICES.balcony,
          rightBalcony:
            Object.keys(availableRightBalcony).length * PRICES.balcony,
        },
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error,
    });
  }
}

function* getTicketInfo(action) {
  try {
    const response = yield call(
      request,
      GET_TICKET_INFO_URL.replace("[SECTION]", action.payload.section).replace(
        "[SEAT]",
        action.payload.seat
      ),
      {
        method: "GET",
      }
    );
    const ticketData = Object.values(response)[0];
    yield put({
      type: SET_TICKET_INFO,
      payload: {
        section: action.payload.section,
        seat: ticketData.position,
        buyer: ticketData.user.name,
        date: ticketData.date,
      },
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error,
    });
  }
}

function* reserveSeat(action) {
  try {
    const response = yield call(
      request,
      PUT_RESERVED_SEAT_URL.replace(
        "[SECTION]",
        action.payload.section
      ).replace("[SEAT_ID]", action.payload.seatId),
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.payload.data),
      }
    );
    // ticket reserved
  } catch (error) {
    console.log(error);
    yield put({
      type: SET_ERROR_MESSAGE,
      payload: error,
    });
  }
}

function* sendQuestion(action) {
  try {
    const response = yield call(request, SEND_QUESTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(action.payload),
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
  yield takeEvery(GET_QUESTIONS, getQuestions);
  yield takeEvery(GET_TICKET_INFO, getTicketInfo);
  yield takeEvery(
    GET_RESERVED_AND_AVAILABLE_SEATS,
    getReservedAndAvailableSeats
  );
  yield takeEvery(RESERVE_SEAT, reserveSeat);
  yield takeEvery(SEND_QUESTION, sendQuestion);
}

export default appSaga;
