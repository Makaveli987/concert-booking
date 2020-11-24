import React from "react";
import { useHistory } from "react-router-dom";
import { MDBMask, MDBView, MDBBtn } from "mdbreact";
import Navbar from "../Navbar";

const Home = () => {
  let history = useHistory();
  return (
    <div id="home">
      <Navbar />
      <MDBView src="https://ld-wt73.template-help.com/tf/bandico_v2/images/bg-image-1.jpg">
        <MDBMask className="flex-center flex-column text-white text-center">
          <h2 className="font-weight-bold" style={{ fontSize: "8vw" }}>
            BANDICO
          </h2>
          <br />
          <h5 style={{ fontSize: "2vw" }}>November 25</h5>
          <h5 style={{ fontSize: "2vw" }}>Belgrade</h5>
          <h5 style={{ fontSize: "2vw" }}>21:00h</h5>
          <br />

          <MDBBtn
            color="danger"
            onClick={() => {
              history.push("/buy_tickets");
            }}
          >
            Buy tickets
          </MDBBtn>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default Home;
