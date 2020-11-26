import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBRow, MDBCol, MDBBtn, MDBTypography } from "mdbreact";
import { Balcony } from "./Balcony";
import { Vip } from "./Vip";
import { Floor } from "./Floor";
import { Legend } from "./Legend";
import {
  getLeftBalconySeats,
  getRightBalconySeats,
} from "../../containers/App/selectors";

import { toggleErrorModal, setPrice } from "../../containers/App/reducer";
import {
  getIsErrorModalOpen,
  getSelectedSeats,
  getPrice,
} from "../../containers/App/selectors";

const Stadium = () => {
  const dispatch = useDispatch();

  const Selector = {
    issErrorModalOpen: useSelector(getIsErrorModalOpen),
    selectedSeats: useSelector(getSelectedSeats),
    price: useSelector(getPrice),
    leftBalconySeats: useSelector(getLeftBalconySeats),
    rightBalconySeats: useSelector(getRightBalconySeats),
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
    Action.setPrice(price);
  });

  return (
    <div id="stadium">
      <MDBCol>
        <MDBRow>
          <MDBCol style={{ textAlign: "left", fontWeight: "bold" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            ></div>

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
        <Balcony
          section="leftBalcony"
          title="Left Balcony"
          seats={Selector.leftBalconySeats}
        />
        <Floor />
        <Balcony
          section="rightBalcony"
          title="Right Balcony"
          seats={Selector.rightBalconySeats}
        />
        <Vip />
        <Legend />
        <br />
        <br />
        <br />
      </MDBRow>
    </div>
  );
};

export default Stadium;
