import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
} from "mdbreact";
import { useDispatch } from "react-redux";
import Stadium from "../Stadium";
import { toggleLogin, toggleRegister } from "../../containers/App/reducer";
import {
  getIsLoginOpen,
  getIsRegisterOpen,
} from "../../containers/App/selectors";
import { fbRegisterUser, fbSignIn, fbSignOut } from "../../request";

const BuyTickets = () => {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };

  const Selector = {
    isLoginOpen: useSelector(getIsLoginOpen),
    isRegisterOpen: useSelector(getIsRegisterOpen),
  };

  const Action = {
    toggleLogin: (payload) => dispatch(toggleLogin(payload)),
    toggleRegister: (payload) => dispatch(toggleRegister(payload)),
  };

  return (
    <div>
      <MDBNavbar
        color="unique-color-dark"
        fixed="top"
        dark
        expand="md"
        scrolling
      >
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <strong>Concert.</strong>
          </MDBNavbarBrand>
          {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink
                  to="#"
                  onClick={() => {
                    // const user = registerUser(
                    //   "Darko",
                    //   "test111@gmail.com",
                    //   "test111"
                    // );
                    // console.log(user);
                    // const user = fbSignIn("test111@gmail.com", "test111");
                    // console.log(user);
                  }}
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() => {
                    Action.toggleLogin(!Selector.isLoginOpen);
                  }}
                >
                  Sign In
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() => {
                    Action.toggleRegister(!Selector.isRegisterOpen);
                  }}
                >
                  Register
                </MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <MDBContainer>
        <br />
        <br />
        <br />
        <br />

        <Stadium />
      </MDBContainer>
    </div>
  );
};

export default BuyTickets;
