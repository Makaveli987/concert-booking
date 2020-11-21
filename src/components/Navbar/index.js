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

const Navbar = () => {
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };

  return (
    <MDBNavbar
      color="unique-color-dark"
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
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="#">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Guests</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="#">Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/buy_tickets">Buy Tickets</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
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
  );
};

export default Navbar;
