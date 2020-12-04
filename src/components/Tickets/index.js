import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBContainer } from "mdbreact";
import Stadium from "../Stadium";
import { getSeats } from "../../containers/App/reducer";
import {} from "../../containers/App/selectors";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import Navbar from "../Navbar";
import { ConcertTicket } from "../Email/ConcertTicket";
import { QRCode } from "../Email/QRCode";

const BuyTickets = () => {
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
      <MDBContainer>
        <br />
        <br />
        <br />
        <Stadium />
        <ConcertTicket />
        <QRCode />
        <Login />
        <Register />
        <ErrorModal />
      </MDBContainer>
      <div
        className="footer-copyright text-center py-3"
        style={{
          backgroundColor: "#1C2331 ",
          marginTop: "30px",
          color: "#fff",
        }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Right Reserved.
        </MDBContainer>
      </div>
    </div>
  );
};

export default BuyTickets;
