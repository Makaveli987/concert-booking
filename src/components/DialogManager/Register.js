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
import { getIsRegisterOpen } from "../../containers/BuyTickets/selectors";
import { toggleRegister } from "../../containers/BuyTickets/reducer";

const Register = () => {
  const dispatch = useDispatch();

  const Selector = {
    isRegisterOpen: useSelector(getIsRegisterOpen),
  };

  const Action = {
    toggleRegister: (payload) => dispatch(toggleRegister(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isRegisterOpen);

  const toggle = () => () => {
    Action.toggleRegister(!Selector.isRegisterOpen);
  };

  useEffect(() => {
    setModal14(Selector.isRegisterOpen);
  }, [Selector.isRegisterOpen]);

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>Register</MDBModalHeader>
        <MDBModalBody>
          <MDBCol>
            <form>
              <div className="grey-text">
                <MDBInput
                  label="Your name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Confirm your email"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
              </div>
              <div className="text-center">
                <MDBBtn color="primary">Register</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Register;
