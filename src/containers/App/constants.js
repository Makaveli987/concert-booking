const DOMAIN = "https://concert-booking.firebaseio.com";

export const GET_SEATS_URL = DOMAIN + "/seats.json";
export const GET_USERS_URL = DOMAIN + "/users.json";
export const GET_ADMIN_USERS_URL = DOMAIN + "/admins.json";

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
