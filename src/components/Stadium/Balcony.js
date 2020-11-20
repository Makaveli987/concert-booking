import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Seats from "./Seat";

export const Balcony = (props) => {
  return (
    <MDBCol
      size="2"
      style={{ border: "1px solid #eee", margin: "10px", textAlign: "center" }}
    >
      <p style={{ padding: "10px 0", margin: "0" }}>{props.section}</p>
      <MDBRow
        style={{
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
        <Seats />
      </MDBRow>
    </MDBCol>
  );
};
