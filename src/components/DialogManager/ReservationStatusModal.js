import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";
import {
  getIsReservationStatusModalOpen,
  getReservationStatusModalType,
} from "../../containers/App/selectors";
import { toggleReservationStatusModal } from "../../containers/App/reducer";

const ReservationStatusModal = (props) => {
  const dispatch = useDispatch();

  const Selector = {
    isReservationStatusModalOpen: useSelector(getIsReservationStatusModalOpen),
    reservationStatusModalType: useSelector(getReservationStatusModalType),
  };

  const Action = {
    toggleReservationStatusModal: (payload) =>
      dispatch(toggleReservationStatusModal(payload)),
  };

  const toggle = () => () => {
    Action.toggleReservationStatusModal({
      status: !Selector.isReservationStatusModalOpen,
      type: "",
    });
    window.location.reload(false);
  };

  return (
    <MDBModal isOpen={Selector.isReservationStatusModalOpen} toggle={toggle()}>
      <MDBModalHeader
        toggle={toggle()}
        style={
          Selector.reservationStatusModalType === "error"
            ? { backgroundColor: "#CC0000", color: "#fff" }
            : { backgroundColor: "#2bbbad", color: "#fff" }
        }
      >
        {Selector.reservationStatusModalType === "error"
          ? "Ticket reservation failed."
          : "Ticket reservation successful"}
      </MDBModalHeader>
      <MDBModalBody>
        {Selector.reservationStatusModalType === "error"
          ? "Something went wrong. Please check all details and try again."
          : "Tickets has been sent to your email."}
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color="info" onClick={toggle()}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default ReservationStatusModal;
