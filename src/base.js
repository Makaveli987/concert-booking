import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBH5-3ZzDNnTjPB9K7ry9nvgxAyFC9Yc7A",
  authDomain: "concert-booking.firebaseapp.com",
  databaseURL: "https://concert-booking.firebaseio.com",
  projectId: "concert-booking",
  storageBucket: "concert-booking.appspot.com",
  messagingSenderId: "897113892766",
  appId: "1:897113892766:web:f6fb5b4dbb4ac699f2188f",
  measurementId: "G-EJR0DLLY4T",
});
