import "isomorphic-fetch";
import app from "./base";

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function request(url, options) {
  return fetch(url, options).then(checkStatus).then(parseJSON);
}

export const fbRegisterUser = (name, email, password) => {
  app
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const currentUser = app.auth().currentUser;
      currentUser
        .updateProfile({
          displayName: name,
        })
        .then(function () {
          return currentUser;
        })
        .catch(function (error) {
          return error;
        });
    })
    .catch((error) => {
      return error;
    });
};

export const fbSignIn = (email, password) => {
  app
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function (result) {
      console.log("signed in");
      // console.log("result", result);
      return result;
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};

export const fbSignOut = () => {
  app
    .auth()
    .signOut()
    .then(function () {
      console.log("Signed out");
    })
    .catch(function (error) {
      console.log(error);
      return error;
    });
};
