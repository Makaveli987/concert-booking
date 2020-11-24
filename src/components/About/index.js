import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";

const About = () => {
  return (
    <div
      id="about"
      className="bg"
      style={{
        backgroundImage:
          "url(https://ld-wt73.template-help.com/tf/bandico_v2/images/bg-about-1.jpg)",
        padding: "80px 0",
      }}
    >
      <MDBContainer>
        <MDBRow>
          <MDBCol style={{ color: "#fff" }}>
            <h2
              className="font-weight-bold"
              style={{
                // fontSize: "30px",
                marginBottom: "80px",
                color: "#fff",
                fontSize: "3vw",
              }}
            >
              {" "}
              A FEW WORDS <span style={{ color: "#af2727" }}>ABOUT</span>{" "}
              BANDICO
            </h2>
            <p>
              Daniel Bandico, better known by his stage name Bandico, is a 27
              y.o. singer and rapper, born and raised in Los Angeles.
            </p>
            <br />
            <p>
              He broke into music scene with his first mixtape M.A.D, released
              in June 2015. Since then, he has been building his career as R&B
              performer with numerous releases.
            </p>
            <br />
            <MDBCardImage
              top
              src="https://ld-wt73.template-help.com/tf/bandico_v2/images/signature-2-230x78.png"
              overlay="white-slight"
              hover
              waves
              alt="MDBCard image cap"
              style={{ width: "200px" }}
            />
          </MDBCol>
          <MDBCol></MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default About;
