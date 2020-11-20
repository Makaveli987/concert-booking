import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import GuestCard from "./GuestCard";

const Guests = () => {
  return (
    <div id="guests" style={{ textAlign: "center", padding: "80px 0" }}>
      <MDBContainer>
        <h2
          className="font-weight-bold"
          style={{
            fontSize: "30px",
            marginBottom: "80px",
            fontSize: "3vw",
            color: "#1C2331",
          }}
        >
          GUESTS PERFORMERS
        </h2>
        <MDBRow>
          <MDBCol>
            <GuestCard
              img="https://www.sqoop.co.ug/wp-content/uploads/2019/09/safe_image-1000x600.jpg"
              name="Torry Jaden"
            />
          </MDBCol>
          <MDBCol>
            <GuestCard
              img="https://ftw.usatoday.com/wp-content/uploads/sites/90/2019/01/marron5.jpg?w=1000&h=600&crop=1"
              name="Jason Derulo"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Guests;
