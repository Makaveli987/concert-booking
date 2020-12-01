export const getIsLoginOpen = (state) => state.isLoginOpen;
export const getIsRegisterOpen = (state) => state.isRegisterOpen;
export const getIsErrorModalOpen = (state) => state.isErrorModalOpen;
export const getIsBuyInfoModalOpen = (state) => state.isBuyInfoModalOpen;
export const getErrorModalMessage = (state) => state.errorModalMessage;
export const getErrorMessage = (state) => state.errorMessage;
export const getUser = (state) => state.user;
export const getVipSeats = (state) => state.vipSeats;
export const getFloorSeats = (state) => state.floorSeats;
export const getRightBalconySeats = (state) => state.rightBalconySeats;
export const getLeftBalconySeats = (state) => state.leftBalconySeats;
export const getSelectedSeats = (state) => state.selectedSeats;
export const getPrice = (state) => state.price;
export const getQuestionsList = (state) => state.questions;
export const getReservedSeats = (state) => state.reservedSeats;
export const getAvailableSeats = (state) => state.availableSeats;
export const getProfit = (state) => state.profit;
export const getPotentialProfitInAvailableSeats = (state) =>
  state.potentialProfitInAvailableSeats;
