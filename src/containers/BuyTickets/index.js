import React, { useEffect, useState } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import { useDispatch } from "react-redux";
import { getUsers } from "./reducer";
import Stadium from "../Stadium";

const BuyTickets = () => {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false);
  const [isWideEnough, setIsWideEnough] = useState(false);

  const onClick = () => {
    setCollapse(!collapse);
  };

  const Action = {
    getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    Action.getUsers();
  });

  return (
    <div>
      <MDBNavbar
        color="unique-color-dark"
        fixed="top"
        dark
        expand="md"
        scrolling
        // transparent
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
