import "isomorphic-fetch";

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

export function getCurrentDateAndTime() {
  const currentdate = new Date();
  const day = currentdate.getDate();
  const month = currentdate.getMonth() + 1;
  const year = currentdate.getFullYear();
  const hours = currentdate.getHours();
  const minutes = currentdate.getMinutes();
  const seconds = currentdate.getSeconds();

  return {
    date: day + "." + month + "." + year,
    time: hours + ":" + minutes + ":" + seconds,
  };
}
