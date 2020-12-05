import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBInput,
  MDBAlert,
} from "mdbreact";
import { sendQuestion } from "../../containers/App/reducer";

const Contact = () => {
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState("");

  const Action = {
    sendQuestion: (payload) => dispatch(sendQuestion(payload)),
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const subject = e.target.elements.subject.value;
    const question = e.target.elements.question.value;
    if (name === "" || email === "" || subject === "" || question === "") {
      setErrorMessage("Please fill all fields");
    } else {
      Action.sendQuestion({ name, email, subject, question });
    }
  };

  return (
    <div
      id="contact"
      style={{ backgroundColor: "#fff", padding: "10px 0 0 0" }}
    >
      <MDBContainer>
        <h2
          className="font-weight-bold"
          style={{
            // fontSize: "30px",
            marginBottom: "80px",
            fontSize: "3vw",
            textAlign: "center",
            color: "#1C2331",
          }}
        >
          CONTACT US
        </h2>
        <MDBRow>
          <MDBCol md="9" className="md-0 mb-5">
            {errorMessage === "" ? null : (
              <MDBAlert color="danger">{errorMessage}.</MDBAlert>
            )}
            <form
              onSubmit={(e) => {
                onFormSubmit(e);
              }}
            >
              <MDBRow>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-name"
                      label="Your name"
                      name="name"
                      validate
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-email"
                      name="email"
                      label="Your email"
                      validate
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="text"
                      id="contact-subject"
                      label="Subject"
                      name="subject"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol md="12">
                  <div className="md-form mb-0">
                    <MDBInput
                      type="textarea"
                      id="contact-message"
                      label="Your message"
                      name="question"
                    />
                  </div>
                </MDBCol>
              </MDBRow>
              <MDBBtn color="primary" size="md" type="submit">
                Send
              </MDBBtn>
            </form>
            <div className="text-center text-md-left"></div>
          </MDBCol>
          <MDBCol md="3" className="text-center">
            <ul className="list-unstyled mb-0">
              <li>
                <MDBIcon
                  icon="map-marker-alt"
                  size="2x"
                  className="blue-text"
                />
                <p>San Francisco, CA 94126, USA</p>
              </li>
              <li>
                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
                <p>+ 01 234 567 89</p>
              </li>
              <li>
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
                <p>contact@example.com</p>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div
        className="footer-copyright text-center py-3"
        style={{
          backgroundColor: "#1C2331 ",
          marginTop: "30px",
          color: "#fff",
        }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Right Reserved.
        </MDBContainer>
      </div>
    </div>
  );
};

export default Contact;
