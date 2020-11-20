import React, { useState } from "react";
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
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };

  return (
    <Router>
      <MDBNavbar
        color="elegant-color"
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBContainer>
          <MDBNavbarBrand href="/">
            <strong>Concert.</strong>
          </MDBNavbarBrand>
          {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
          <MDBCollapse isOpen={collapse} navbar>
            <MDBNavbarNav right>
              <MDBNavItem active>
                <MDBNavLink to="#">Sign In</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#">Register</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Router>
  );
};

export default Navbar;
