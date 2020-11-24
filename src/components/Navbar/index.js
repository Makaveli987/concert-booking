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

  const scrollToSection = (element) => {
    element.scrollIntoView({ behavior: "smooth" });
    element.classList.add("active");
    // if (props.screenSize < 750) {
    //   setIsOpen(!isOpen);
    // }
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
        <MDBNavbarBrand
          href="/"
          onClick={() => scrollToSection(document.getElementById("home"))}
        >
          <strong>Concert.</strong>
        </MDBNavbarBrand>
        {!isWideEnough && <MDBNavbarToggler onClick={onClick} />}
        <MDBCollapse isOpen={collapse} navbar>
          <MDBNavbarNav left>
            <MDBNavItem>
              <MDBNavLink
                to="#"
                onClick={() => scrollToSection(document.getElementById("home"))}
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
