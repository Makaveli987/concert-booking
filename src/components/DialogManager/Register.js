import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBCol,
  MDBAlert,
} from "mdbreact";
import { getIsRegisterOpen } from "../../containers/App/selectors";
import { toggleRegister, registerUser } from "../../containers/App/reducer";

const Register = () => {
  const dispatch = useDispatch();

  const [validated, setValidated] = useState(true);

  const Selector = {
    isRegisterOpen: useSelector(getIsRegisterOpen),
  };

  const Action = {
    toggleRegister: (payload) => dispatch(toggleRegister(payload)),
    registerUser: (payload) => dispatch(registerUser(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isRegisterOpen);

  const toggle = () => () => {
    Action.toggleRegister(!Selector.isRegisterOpen);
  };

  useEffect(() => {
    setModal14(Selector.isRegisterOpen);
  }, [Selector.isRegisterOpen]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const passwordConfirm = e.target.elements.passwordConfirm.value;

    if (password !== passwordConfirm) {
      setValidated(false);
    }
    if (validated) {
      Action.registerUser({ name, email, password });
    }
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>Register</MDBModalHeader>
        <MDBModalBody>
          <MDBCol>
            <form
              onSubmit={(e) => {
                onFormSubmit(e);
              }}
            >
              <div className="grey-text">
                {validated ? null : (
                  <MDBAlert color="danger">Passwords does not match.</MDBAlert>
                )}
                <MDBInput
                  name="name"
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  name="email"
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  name="password"
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
                <MDBInput
                  name="passwordConfirm"
                  label="Confirm your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary" type="submit">
                  Register
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Register;
