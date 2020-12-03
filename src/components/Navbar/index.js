import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
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
} from "../../containers/App/reducer";

import {
  getIsLoginOpen,
  getIsRegisterOpen,
} from "../../containers/App/selectors";

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const [username, setUsername] = useState("");
  const [isWideEnough] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const Selector = {
    isLoginOpen: useSelector(getIsLoginOpen),
    isRegisterOpen: useSelector(getIsRegisterOpen),
  };

  const Action = {
    toggleLogin: (payload) => dispatch(toggleLogin(payload)),
    toggleRegister: (payload) => dispatch(toggleRegister(payload)),
    signOutUser: (payload) => dispatch(signOutUser(payload)),
  };

  useEffect(() => {
    const name = localStorage.getItem("username");
    setUsername(name);
    setIsAdmin(localStorage.getItem("isAdmin"));
  }, []);

  const onClick = () => {
    setCollapse(!collapse);
  };

  const scrollToSection = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MDBNavbar
      color="unique-color-dark"
      fixed="top"
      dark
      expand="md"
      scrolling
      transparent={location.pathname === "/" ? true : false}
    >
      <MDBContainer>
        {location.pathname === "/" ? (
          <MDBNavbarBrand
            href="/"
            onClick={() => scrollToSection(document.getElementById("home"))}
          >
            <strong>Concert.</strong>
          </MDBNavbarBrand>
        ) : (
          <MDBNavbarBrand href="/">
            <strong>Concert.</strong>
          </MDBNavbarBrand>
        )}
        {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          {location.pathname === "/" ? (
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() =>
                    scrollToSection(document.getElementById("home"))
                  }
                >
                  Home
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() =>
                    scrollToSection(document.getElementById("guests"))
                  }
                >
                  Guests
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() =>
                    scrollToSection(document.getElementById("about"))
                  }
                >
                  About
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() =>
                    scrollToSection(document.getElementById("gallery"))
                  }
                >
                  Gallery
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  to="#"
                  onClick={() =>
                    scrollToSection(document.getElementById("contact"))
                  }
                >
                  Contact
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/buy_tickets">Buy Tickets</MDBNavLink>
              </MDBNavItem>
              {isAdmin === "true" ? (
                <MDBNavItem>
                  <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
                </MDBNavItem>
              ) : null}
            </MDBNavbarNav>
          ) : (
            <MDBNavbarNav left>
              <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/buy_tickets">Buy Tickets</MDBNavLink>
              </MDBNavItem>
              {username === "Admin" ? (
                <MDBNavItem>
                  <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
                </MDBNavItem>
              ) : null}
            </MDBNavbarNav>
          )}
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
  );
};

export default Navbar;
