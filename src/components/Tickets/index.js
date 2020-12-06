import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBContainer } from "mdbreact";
import Stadium from "../Stadium";
import { getSeats } from "../../containers/App/reducer";
import {} from "../../containers/App/selectors";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import Loader from "../../components/Loader";
import Navbar from "../Navbar";
import { getIsLoading } from "../../containers/App/selectors";

const BuyTickets = () => {
  const dispatch = useDispatch();

  const Selector = {
    isLoading: useSelector(getIsLoading),
  };

  const Action = {
    getSeats: (payload) => dispatch(getSeats(payload)),
  };

  useEffect(() => {
    Action.getSeats();
  }, []);

  return (
    <div>
      <Navbar />
      {Selector.isLoading ? (
        <Loader />
      ) : (
        <MDBContainer>
          <br />
          <br />
          <br />
          <Stadium />
          <Login />
          <Register />
          <ErrorModal />
        </MDBContainer>
      )}
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
