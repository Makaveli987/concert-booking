import React from "react";
import { MDBMask, MDBView, MDBBtn } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

const Home = () => {
  return (
    <div id="home">
      <MDBView src="https://ld-wt73.template-help.com/tf/bandico_v2/images/bg-image-1.jpg">
        <MDBMask
          // overlay="black-strong"
          className="flex-center flex-column text-white text-center"
        >
          <h2 className="font-weight-bold" style={{ fontSize: "8vw" }}>
            BANDICO
          </h2>
          <br />
          <h5 style={{ fontSize: "2vw" }}>November 25</h5>
          <h5 style={{ fontSize: "2vw" }}>21:00h</h5>
          <br />
          <MDBBtn color="danger">Buy tickets</MDBBtn>
        </MDBMask>
      </MDBView>
    </div>
  );
};

export default Home;
