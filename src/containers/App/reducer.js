import { createAction } from "redux-actions";

export const TOGGLE_LOGIN = "TOGGLE_LOGIN";
export const TOGGLE_REGISTER = "TOGGLE_REGISTER";
export const TOGGLE_ERROR_MODAL = "TOGGLE_ERROR_MODAL";
export const TOGGLE_BUY_INFO_MODAL = "TOGGLE_BUY_INFO_MODAL";
export const TOGGLE_RESERVATION_STATUS_MODAL =
  "TOGGLE_RESERVATION_STATUS_MODAL";
export const TOGGLE_MESSAGE_SENT_MODAL = "TOGGLE_MESSAGE_SENT_MODAL";
export const REGISTER_USER = "REGISTER_USER";
export const SIGNIN_USER = "SIGIN_USER";
export const SIGNOUT_USER = "SIGNOUT";
export const SET_ERROR_MESSAGE = "SET_ERROR_MESSAGE";
export const SET_USER = "SET_USER";
export const GET_SEATS = "GET_SEATS";
export const SET_VIP_SEATS = "SET_VIP_SEATS";
export const SET_FLOOR_SEATS = "SET_FLOOR_SEATS";
export const SET_RIGHT_BALCONY_SEATS = "SET_RIGHT_BALCONY_SEATS";
export const SET_LEFT_BALCONY_SEATS = "SET_LEFT_BALCONY_SEATS";
export const ADD_SELECTED_SEAT = "ADD_SELECTED_SEAT";
export const REMOVE_SELECTED_SEAT = "REMOVE_SELECTED_SEAT";
export const SET_PRICE = "SET_PRICE";
export const GET_QUESTIONS = "GET_QUESTIONS";
export const SET_QUESTIONS = "SET_QUESTIONS";
export const SET_RESERVED_AND_AVAILABLE_SEATS =
  "SET_RESERVED_AND_AVAILABLE_SEATS";
export const GET_RESERVED_AND_AVAILABLE_SEATS =
  "GET_RESERVED_AND_AVAILABLE_SEATS";
export const SET_PROFIT = "SET_PROFIT";
export const SET_TICKET_INFO = "SET_TICKET_INFO";
export const GET_TICKET_INFO = "GET_TICKET_INFO";
export const RESERVE_SEAT = "RESERVE_SEAT";
export const SEND_QUESTION = "SEND_QUESTION";
export const SET_IS_LOADING = "SET_IS_LOADING";

const initialState = {
  isLoading: false,
  isLoginOpen: false,
  isRegisterOpen: false,
  isErrorModalOpen: {},
  isBuyInfoModalOpen: false,
  isReservationStatusModalOpen: false,
  reservationStatusModalType: "",
  isMessageSentModalOpen: false,
  messageSentModalType: "",
  errorModalMessage: "",
  errorMessage: "",
  user: null,
  vipSeats: {},
  floorSeats: {},
  rightBalconySeats: {},
  leftBalconySeats: {},
  reservedSeats: {
    total: 0,
    vip: 0,
    floor: 0,
    leftBalcony: 0,
    rightBalcony: 0,
  },
  availableSeats: {
    total: 0,
    vip: 0,
    floor: 0,
    leftBalcony: 0,
    rightBalcony: 0,
  },
  profit: {
    total: 0,
    vip: 0,
    floor: 0,
    leftBalcony: 0,
    rightBalcony: 0,
  },
  potentialProfitInAvailableSeats: {
    total: 0,
    vip: 0,
    floor: 0,
    leftBalcony: 0,
    rightBalcony: 0,
  },
  selectedSeats: [],
  price: 0,
  questions: {},
  ticketInfo: {
    section: "",
    seat: "",
    buyer: "",
    date: "",
  },
};

function removeSeat(seats, id) {
  return seats.filter((seat) => {
    return seat.id !== id;
  });
}

function ticketsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case TOGGLE_LOGIN:
      return { ...state, isLoginOpen: action.payload };
    case TOGGLE_REGISTER:
      return { ...state, isRegisterOpen: action.payload };
    case TOGGLE_ERROR_MODAL:
      return {
        ...state,
        isErrorModalOpen: action.payload.status,
        errorModalMessage: action.payload.message,
      };
    case TOGGLE_BUY_INFO_MODAL:
      return { ...state, isBuyInfoModalOpen: action.payload };
    case TOGGLE_RESERVATION_STATUS_MODAL:
      return {
        ...state,
        isReservationStatusModalOpen: action.payload.status,
        reservationStatusModalType: action.payload.type,
      };
    case TOGGLE_MESSAGE_SENT_MODAL:
      return {
        ...state,
        isMessageSentModalOpen: action.payload.status,
        messageSentModalType: action.payload.type,
      };
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    case SET_VIP_SEATS:
      return { ...state, vipSeats: action.payload };
    case SET_FLOOR_SEATS:
      return { ...state, floorSeats: action.payload };
    case SET_RIGHT_BALCONY_SEATS:
      return { ...state, rightBalconySeats: action.payload };
    case SET_LEFT_BALCONY_SEATS:
      return { ...state, leftBalconySeats: action.payload };
    case ADD_SELECTED_SEAT:
      return {
        ...state,
        selectedSeats: [action.payload, ...state.selectedSeats],
      };
    case REMOVE_SELECTED_SEAT:
      return {
        ...state,
        selectedSeats: removeSeat(state.selectedSeats, action.payload.id),
      };
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      };
    case SET_QUESTIONS:
      return { ...state, questions: action.payload };
    case SET_RESERVED_AND_AVAILABLE_SEATS:
      return {
        ...state,
        reservedSeats: action.payload.reservedSeats,
        availableSeats: action.payload.availableSeats,
      };
    case SET_PROFIT:
      return {
        ...state,
        profit: action.payload.profit,
        potentialProfitInAvailableSeats:
          action.payload.potentialProfitInAvailableSeats,
      };
    case SET_TICKET_INFO:
      return { ...state, ticketInfo: action.payload };
    default:
      return state;
  }
}

export default ticketsReducer;

export const toggleLogin = createAction(TOGGLE_LOGIN);
export const toggleRegister = createAction(TOGGLE_REGISTER);
export const toggleErrorModal = createAction(TOGGLE_ERROR_MODAL);
export const toggleBuyInfoModal = createAction(TOGGLE_BUY_INFO_MODAL);
export const toggleReservationStatusModal = createAction(
  TOGGLE_RESERVATION_STATUS_MODAL
);
export const toggleMessageSentModal = createAction(TOGGLE_MESSAGE_SENT_MODAL);
export const registerUser = createAction(REGISTER_USER);
export const signInUser = createAction(SIGNIN_USER);
export const signOutUser = createAction(SIGNOUT_USER);
export const setErrorMessage = createAction(SET_ERROR_MESSAGE);
export const getSeats = createAction(GET_SEATS);
export const addSelectedSeat = createAction(ADD_SELECTED_SEAT);
export const removeSelectedSeat = createAction(REMOVE_SELECTED_SEAT);
export const setPrice = createAction(SET_PRICE);
export const getQuestions = createAction(GET_QUESTIONS);
export const getTicketInfo = createAction(GET_TICKET_INFO);
export const getReservedAndAvailableSeats = createAction(
  GET_RESERVED_AND_AVAILABLE_SEATS
);
export const reserveSeat = createAction(RESERVE_SEAT);
export const sendQuestion = createAction(SEND_QUESTION);
