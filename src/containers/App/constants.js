const DOMAIN = "https://concert-booking.firebaseio.com";

export const GET_SEATS_URL = DOMAIN + "/seats.json";
export const GET_USERS_URL = DOMAIN + "/users.json";
export const GET_QUESTIONS_URL = DOMAIN + "/questions.json";
export const GET_ADMIN_USERS_URL = DOMAIN + "/admins.json";
export const GET_RESERVED_VIP_SEATS_URL =
  DOMAIN + '/seats/seats/vip.json?orderBy="isReserved"&equalTo=true';
export const GET_AVAILABLE_VIP_SEATS_URL =
  DOMAIN + '/seats/seats/vip.json?orderBy="isReserved"&equalTo=false';
export const GET_RESERVED_FlOOR_SEATS_URL =
  DOMAIN + '/seats/seats/floor.json?orderBy="isReserved"&equalTo=true';
export const GET_AVAILABLE_FLOOR_SEATS_URL =
  DOMAIN + '/seats/seats/floor.json?orderBy="isReserved"&equalTo=false';
export const GET_RESERVED_LEFT_BALCONY_SEATS_URL =
  DOMAIN + '/seats/seats/leftBalcony.json?orderBy="isReserved"&equalTo=true';
export const GET_AVAILABLE_LEFT_BALCONY_SEATS_URL =
  DOMAIN + '/seats/seats/leftBalcony.json?orderBy="isReserved"&equalTo=false';
export const GET_RESERVED_RIGHT_BALCONY_SEATS_URL =
  DOMAIN + '/seats/seats/rightBalcony.json?orderBy="isReserved"&equalTo=true';
export const GET_AVAILABLE_RIGHT_BALCONY_SEATS_URL =
  DOMAIN + '/seats/seats/rightBalcony.json?orderBy="isReserved"&equalTo=false';

export const PRICES = {
  vip: 50,
  floor: 15,
  balcony: 25,
};

export const CHART_LABELS = [
  "Total",
  "Floor",
  "Left Balcony",
  "Right Balcony",
  "Vip",
];
