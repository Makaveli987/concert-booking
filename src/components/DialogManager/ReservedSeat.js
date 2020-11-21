import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBCol,
} from "mdbreact";
import { getIsReservedSeatOpen } from "../../containers/BuyTickets/selectors";
import { toogleReservedSeat } from "../../containers/BuyTickets/reducer";

const Login = () => {
  const dispatch = useDispatch();

  const Selector = {
    isReservedSeatOpen: useSelector(getIsReservedSeatOpen),
  };

  const Action = {
    toogleReservedSeat: (payload) => dispatch(toogleReservedSeat(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isReservedSeatOpen);

  const toggle = () => () => {
    Action.toggleLogin(!Selector.isReservedSeatOpen);
  };

  useEffect(() => {
    setModal14(Selector.isReservedSeatOpen);
  }, [Selector.isReservedSeatOpen]);

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>
          This seat is already reserved
        </MDBModalHeader>
        <MDBModalBody>
          <MDBCol style={{ textAlign: "center" }}>
            <MDBBtn color="danger" onClick={toggle()}>
              Close
            </MDBBtn>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default Login;
