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
import {
  getIsLoginOpen,
  getErrorMessage,
} from "../../containers/App/selectors";
import {
  toggleLogin,
  signInUser,
  setErrorMessage,
} from "../../containers/App/reducer";

const Login = () => {
  const dispatch = useDispatch();

  const Selector = {
    isLoginOpen: useSelector(getIsLoginOpen),
    errorMessage: useSelector(getErrorMessage),
  };

  const Action = {
    toggleLogin: (payload) => dispatch(toggleLogin(payload)),
    signInUser: (payload) => dispatch(signInUser(payload)),
    setErrorMessage: (payload) => dispatch(setErrorMessage(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isLoginOpen);

  const toggle = () => () => {
    Action.toggleLogin(!Selector.isLoginOpen);
  };

  useEffect(() => {
    setModal14(Selector.isLoginOpen);
  }, [Selector.isLoginOpen]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    Action.signInUser({ email, password });
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>Login</MDBModalHeader>
        <MDBModalBody>
          <MDBCol>
            <form
              onSubmit={(e) => {
                onFormSubmit(e);
              }}
            >
              <div className="grey-text">
                {Selector.errorMessage === "" ? null : (
                  <MDBAlert color="danger">{Selector.errorMessage}.</MDBAlert>
                )}
                <MDBInput
                  name="email"
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  name="password"
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Sign In</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Login;
