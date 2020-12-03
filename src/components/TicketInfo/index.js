import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import queryString from "query-string";
import { MDBContainer, MDBBox } from "mdbreact";

import { getTicketInfo } from "../../containers/App/reducer";
import { getTicketInfoData } from "../../containers/App/selectors";
import Navbar from "../../components/Navbar/";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";

const TicketInfo = (props) => {
  const dispatch = useDispatch();

  const Selector = {
    ticketInfo: useSelector(getTicketInfoData),
  };

  const Action = {
    getTicketInfo: (payload) => dispatch(getTicketInfo(payload)),
  };

  useEffect(() => {
    let queries = queryString.parse(props.location.search);
    Action.getTicketInfo(queries);
  }, []);

  return (
    <div>
      <Navbar />
      <MDBContainer>
        <br />
        <br />
        <br />
        <MDBBox tag="p" style={{ color: "#1C2331", fontSize: "20px" }}>
          <strong>Section: </strong> {Selector.ticketInfo.section}
        </MDBBox>
        <MDBBox tag="p" style={{ color: "#1C2331", fontSize: "20px" }}>
          <strong>Seat: </strong> {Selector.ticketInfo.seat}
        </MDBBox>
        <MDBBox tag="p" style={{ color: "#1C2331", fontSize: "20px" }}>
          <strong>Buyer: </strong> {Selector.ticketInfo.buyer}
        </MDBBox>
        <MDBBox tag="p" style={{ color: "#1C2331", fontSize: "20px" }}>
          <strong>Date: </strong> {Selector.ticketInfo.date}
        </MDBBox>
      </MDBContainer>
      <Login />
      <Register />
      <ErrorModal />
    </div>
  );
};

export default TicketInfo;
