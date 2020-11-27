import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import GuestCard from "./GuestCard";
import guestOne from "../../images/guest-1.jpg";
import guestTwo from "../../images/guest-2.jpg";

const Guests = () => {
  return (
    <div id="guests" style={{ textAlign: "center", padding: "80px 0" }}>
      <MDBContainer>
        <h2
          className="font-weight-bold"
          style={{
            marginBottom: "80px",
            fontSize: "3vw",
            color: "#1C2331",
          }}
        >
          GUESTS PERFORMERS
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "",
          }}
        >
          <div>
            <GuestCard img={guestOne} name="Jannet Taylor" />
          </div>
          <div>
            <GuestCard img={guestTwo} name="Jason Derulo" />
          </div>
        </div>
      </MDBContainer>
    </div>
  );
};

export default Guests;
