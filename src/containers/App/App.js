import React, { Component, useEffect } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import { useDispatch } from "react-redux";
import { getUsers } from "./reducer";
import Home from "../../components/Home";

const App = () => {
  const dispatch = useDispatch();

  const Action = {
    getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    Action.getUsers();
  });

  return <Home />;
};

export default App;
