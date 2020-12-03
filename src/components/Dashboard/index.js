import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer } from "mdbreact";
import { getSeats } from "../../containers/App/reducer";

import Navbar from "../Navbar";
import Login from "../DialogManager/Login";
import Register from "../DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import Tab from "./Tab";

const Dashboard = () => {
  const dispatch = useDispatch();

  const Selector = {};

  const Action = {
    getSeats: (payload) => dispatch(getSeats(payload)),
  };

  useEffect(() => {
    const name = localStorage.getItem("username");
    Action.getSeats();
  }, []);

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <Tab />
      <Login />
      <Register />
      <ErrorModal />
      <div
        className="footer-copyright text-center py-3"
        style={{
          backgroundColor: "#1C2331 ",
          marginTop: "30px",
          color: "#fff",
          position: "fixed",
          bottom: "0",
          width: "100vw",
        }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Right Reserved.
        </MDBContainer>
      </div>
    </div>
  );
};

export default Dashboard;
