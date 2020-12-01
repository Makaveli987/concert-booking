import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import {
  toggleLogin,
  toggleRegister,
  signOutUser,
  getSeats,
} from "../../containers/App/reducer";
import {
  getIsLoginOpen,
  getIsRegisterOpen,
} from "../../containers/App/selectors";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import Tab from "./Tab";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const [username, setUsername] = useState("");
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
    signOutUser: (payload) => dispatch(signOutUser(payload)),
    getSeats: (payload) => dispatch(getSeats(payload)),
  };

  useEffect(() => {
    const name = localStorage.getItem("username");
    Action.getSeats();
    setUsername(name);
  }, []);

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
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {username ? (
                <MDBNavItem>
                  <MDBNavLink to="#">{username}</MDBNavLink>
                </MDBNavItem>
              ) : null}
              <MDBNavItem>
                {username ? (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      Action.signOutUser();
                    }}
                  >
                    Sign Out
                  </MDBNavLink>
                ) : (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      Action.toggleLogin(!Selector.isLoginOpen);
                    }}
                  >
                    Sign In
                  </MDBNavLink>
                )}
              </MDBNavItem>
              <MDBNavItem>
                {username ? null : (
                  <MDBNavLink
                    to="#"
                    onClick={() => {
                      Action.toggleRegister(!Selector.isRegisterOpen);
                    }}
                  >
                    Register
                  </MDBNavLink>
                )}
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <br />
      <br />
      <Tab />
      <Login />
      <Register />
      <ErrorModal />
      <div
        className="footer-copyright text-center py-3"
        style={{
          backgroundColor: "#1C2331 ",
          marginTop: "30px",
          color: "#fff",
          position: "fixed",
          bottom: "0",
          width: "100vw",
        }}
      >
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Right Reserved.
        </MDBContainer>
      </div>
    </div>
  );
};

export default Dashboard;
