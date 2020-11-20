import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { MDBRow, MDBCol } from "mdbreact";
import { useDispatch } from "react-redux";
import { getUsers } from "./reducer";
import Seat from "../../components/Stadium/Seat";
import { Balcony } from "../../components/Stadium/Balcony";
import { Vip } from "../../components/Stadium/Vip";
import { Floor } from "../../components/Stadium/Floor";

const Stadium = () => {
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
    <div id="stadium">
      <MDBCol style={{ border: "1px solid #eee", textAlign: "center" }}>
        <br />
        <p style={{ textAlign: "center" }}>STAGE</p>
        <br />
      </MDBCol>
      <MDBRow style={{ margin: "0 auto" }}>
        <Balcony section="Left Balcony" />
        <Floor />
        <Balcony section="Right Balcony" />
      </MDBRow>
      <Vip />
    </div>
  );
};

export default Stadium;
