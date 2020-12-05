import React from "react";
import { useSelector } from "react-redux";
import { MDBRow, MDBCol } from "mdbreact";
import Seat from "./Seat";
import { getVipSeats } from "../../containers/App/selectors";
import { PRICES } from "../../containers/App/constants";

export const Vip = () => {
  const Selector = {
    vipSeats: useSelector(getVipSeats),
  };

  const seats = Object.entries(Selector.vipSeats).map(([seat, value]) => {
    return (
      <Seat
        section="vip"
        price={PRICES.vip}
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
    <MDBRow>
      <MDBCol size="2" style={{ margin: "10px" }}></MDBCol>
      <MDBCol
        style={{
          border: "1px solid #eee",
          margin: "10px",
          textAlign: "center",
        }}
      >
        <p style={{ padding: "10px 0", margin: "0" }}>VIP</p>
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
      <MDBCol size="2" style={{ margin: "10px" }}></MDBCol>
    </MDBRow>
  );
};
