import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Seat from "./Seat";
import { PRICES } from "../../containers/App/constants";

export const Balcony = (props) => {
  const seats = Object.entries(props.seats).map(([seat, value]) => {
    return (
      <Seat
        section={props.section}
        price={PRICES.balcony}
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
      size="2"
      style={{ border: "1px solid #eee", margin: "10px", textAlign: "center" }}
    >
      <p style={{ padding: "10px 0", margin: "0" }}>{props.title}</p>
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
