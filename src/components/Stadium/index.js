import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBRow, MDBCol, MDBBtn, MDBTypography } from "mdbreact";
import Seat from "./Seat";
import { Balcony } from "./Balcony";
import { Vip } from "./Vip";
import { Floor } from "./Floor";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import { toggleErrorModal, setPrice } from "../../containers/App/reducer";
import {
  getIsErrorModalOpen,
  getSelectedSeats,
  getPrice,
} from "../../containers/App/selectors";

const Stadium = () => {
  const dispatch = useDispatch();
  // const [collapse, setCollapse] = useState(false);

  const Selector = {
    issErrorModalOpen: useSelector(getIsErrorModalOpen),
    selectedSeats: useSelector(getSelectedSeats),
    price: useSelector(getPrice),
  };

  const Action = {
    setPrice: (payload) => dispatch(setPrice(payload)),
    toggleErrorModal: (payload) => dispatch(toggleErrorModal(payload)),
  };

  const calculatePrice = () => {
    if (Selector.selectedSeats.length > 0) {
      const price = Selector.selectedSeats
        .map((seat) => parseInt(seat.price))
        .reduce((prev, next) => prev + next);
      return price;
    }
    return 0;
  };

  useEffect(() => {
    const price = calculatePrice();
    console.log(price);
    Action.setPrice(price);
  });

  return (
    <div id="stadium">
      {/* <MDBCol style={{ border: "1px solid #eee" }}> */}
      <MDBCol>
        <MDBRow>
          <MDBCol style={{ textAlign: "left", fontWeight: "bold" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0",
              }}
            >
              <MDBTypography style={{ margin: "0 10px 0 0" }} tag="h5">
                <strong style={{ color: "#6b6b6b" }}>Seats: </strong>
              </MDBTypography>
              {/* render selected seats */}
              <Seat />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <MDBTypography style={{ margin: "0" }} tag="h5">
                <strong style={{ color: "#6b6b6b" }}>Price</strong>:{" "}
              </MDBTypography>
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "26px",
                  marginLeft: "10px",
                  color: "#6b6b6b",
                }}
              >
                {Selector.price}$
              </span>
            </div>
          </MDBCol>
          <MDBCol size="3">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                height: "100%",
              }}
            >
              <MDBBtn color="danger">Buy tickets</MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <br />
      <MDBCol style={{ border: "1px solid #eee", textAlign: "center" }}>
        <br />
        <p style={{ textAlign: "center" }}>STAGE</p>
        <br />
      </MDBCol>
      <MDBRow style={{ margin: "0 auto" }}>
        <Balcony section="Left Balcony" />
        <Floor />
        <Balcony section="Right Balcony" />
      </MDBRow>
      <Vip />
      <Login />
      <Register />
      <ErrorModal />
    </div>
  );
};

export default Stadium;
