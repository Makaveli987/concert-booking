import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavItem,
  MDBNavLink,
  MDBContainer,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

class FullPageIntroWithFixedTransparentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          <Router>
            <MDBNavbar
              // color="elegant-color"
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
                {!this.state.isWideEnough && (
                  <MDBNavbarToggler onClick={this.onClick} />
                )}
                <MDBCollapse isOpen={this.state.collapse} navbar>
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
          <MDBView src="https://ld-wt73.template-help.com/tf/bandico_v2/images/bg-image-1.jpg">
            <MDBMask
              // overlay="black-strong"
              className="flex-center flex-column text-white text-center"
            >
              <h2 className="font-weight-bold" style={{ fontSize: "8vw" }}>
                BANDICO
              </h2>
              <br />
              <h5 style={{ fontSize: "2vw" }}>November 25</h5>
              <h5 style={{ fontSize: "2vw" }}>21:00h</h5>
              <br />
              <MDBBtn color="danger">Buy tickets</MDBBtn>
            </MDBMask>
          </MDBView>
        </header>
      </div>
    );
  }
}

export default FullPageIntroWithFixedTransparentNavbar;
