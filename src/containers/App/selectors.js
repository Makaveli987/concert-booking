export const getIsLoginOpen = (state) => state.isLoginOpen;
export const getIsRegisterOpen = (state) => state.isRegisterOpen;
export const getIsErrorModalOpen = (state) => state.isErrorModalOpen;
export const getIsBuyInfoModalOpen = (state) => state.isBuyInfoModalOpen;
export const getIsReservationStatusModalOpen = (state) =>
  state.isReservationStatusModalOpen;
export const getReservationStatusModalType = (state) =>
  state.reservationStatusModalType;
export const getIsMessageSentModalOpen = (state) =>
  state.isMessageSentModalOpen;
export const getMessageSentModalType = (state) => state.messageSentModalType;
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
export const getTicketInfoData = (state) => state.ticketInfo;
export const getIsLoading = (state) => state.isLoading;
