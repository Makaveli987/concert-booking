import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBIcon,
} from "mdbreact";

const Card = (props) => {
  return (
    <MDBCard style={{ maxWidth: "400px", margin: "20px auto" }}>
      <MDBCardImage
        top
        src={props.img}
        overlay="white-slight"
        hover
        waves
        alt="MDBCard image cap"
      />
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <hr />
        <MDBCardText>
          Some quick example text to build on the card title and make up the.
          Some quick example text to build on the card title and make up the
        </MDBCardText>
        <MDBCol
          md="12"
          className="d-flex justify-content-center"
          style={{ padding: "20px 0" }}
        >
          <a href="!#" className="px-2 fa-lg li-ic">
            <MDBIcon
              fab
              icon="linkedin-in"
              className="indigo-text pr-3"
            ></MDBIcon>
          </a>

          <a href="!#" className="px-2 fa-lg tw-ic">
            <MDBIcon fab icon="twitter" className="cyan-text pr-3"></MDBIcon>
          </a>

          <a href="!#" className="px-2 fa-lg fb-ic">
            <MDBIcon
              fab
              icon="facebook-f"
              className="indigo-text pr-3"
            ></MDBIcon>
          </a>
        </MDBCol>
      </MDBCardBody>
    </MDBCard>
  );
};

export default Card;
