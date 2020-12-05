import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { MDBContainer } from "mdbreact";
import { getSeats } from "../../containers/App/reducer";

import Navbar from "../Navbar";
import Login from "../DialogManager/Login";
import Register from "../DialogManager/Register";
import ErrorModal from "../DialogManager/ErrorModal";
import Tab from "./Tab";

const Dashboard = () => {
  const dispatch = useDispatch();

  const Action = {
    getSeats: (payload) => dispatch(getSeats(payload)),
  };

  useEffect(() => {
    Action.getSeats();
  }, [Action]);

  return (
    <div>
      <Navbar />
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
