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
} from "mdbreact";
import { getIsLoginOpen } from "../../containers/App/selectors";
import { toggleLogin } from "../../containers/App/reducer";

const Login = () => {
  const dispatch = useDispatch();

  const Selector = {
    isLoginOpen: useSelector(getIsLoginOpen),
  };

  const Action = {
    toggleLogin: (payload) => dispatch(toggleLogin(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isLoginOpen);

  const toggle = () => () => {
    Action.toggleLogin(!Selector.isLoginOpen);
  };

  useEffect(() => {
    setModal14(Selector.isLoginOpen);
  }, [Selector.isLoginOpen]);

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>Login</MDBModalHeader>
        <MDBModalBody>
          <MDBCol>
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Type your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Type your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn>Sign In</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Login;
