import React, { useEffect, useState } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBTypography } from "mdbreact";
import { useDispatch } from "react-redux";
import Seat from "./Seat";
import { Balcony } from "./Balcony";
import { Vip } from "./Vip";
import { Floor } from "./Floor";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";

const Stadium = () => {
  const dispatch = useDispatch();
  // const [collapse, setCollapse] = useState(false);

  const Action = {
    // getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    // Action.getUsers();
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
                <strong>Seats: </strong>
              </MDBTypography>
              {/* render selected seats */}
              <Seat />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <MDBTypography style={{ margin: "0" }} tag="h5">
                <strong>Price</strong>:{" "}
              </MDBTypography>
              <span
                style={{
                  fontWeight: "normal",
                  fontSize: "26px",
                  marginLeft: "10px",
                }}
              >
                650$
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
    </div>
  );
};

export default Stadium;
