import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MDBRow, MDBCol } from "mdbreact";
import Seat from "./Seat";
import { getVipSeats } from "../../containers/App/selectors";

export const Vip = () => {
  const dispatch = useDispatch();

  const Selector = {
    vipSeats: useSelector(getVipSeats),
  };

  const seats = Object.entries(Selector.vipSeats).map(([seat, value]) => {
    return (
      <Seat
        section="vip"
        price="300"
        key={seat}
        id={seat}
        position={value.position}
        isReserved={value.isReserved}
      />
    );
  });

  // const Action = {
  //   toggleLogin: (payload) => dispatch(toggleLogin(payload)),
  //   toggleRegister: (payload) => dispatch(toggleRegister(payload)),
  //   signOutUser: (payload) => dispatch(signOutUser(payload)),
  //   getSeats: (payload) => dispatch(getSeats(payload)),
  // };

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
