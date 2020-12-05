import React from "react";
import { useSelector } from "react-redux";
import { MDBRow, MDBCol } from "mdbreact";
import { getFloorSeats } from "../../containers/App/selectors";
import { PRICES } from "../../containers/App/constants";

import Seat from "./Seat";

export const Floor = () => {
  const Selector = {
    floorSeats: useSelector(getFloorSeats),
  };

  const seats = Object.entries(Selector.floorSeats).map(([seat, value]) => {
    return (
      <Seat
        section="floor"
        price={PRICES.floor}
        key={seat}
        id={seat}
        position={value.position}
        isReserved={value.isReserved}
        reservedByUser={
          value.user !== undefined &&
          localStorage.getItem("email") === value.user.email
            ? true
            : false
        }
        clickable
      />
    );
  });
  return (
    <MDBCol
      style={{ border: "1px solid #eee", margin: "10px", textAlign: "center" }}
    >
      <p style={{ padding: "10px 0", margin: "0" }}>Floor</p>
      <MDBRow
        style={{
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {seats}
      </MDBRow>
    </MDBCol>
  );
};
