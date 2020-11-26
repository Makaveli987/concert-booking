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
import { getIsErrorModalOpen } from "../../containers/App/selectors";
import { toggleErrorModal } from "../../containers/App/reducer";

const ErrorModal = () => {
  const dispatch = useDispatch();

  const Selector = {
    isErrorModalOpen: useSelector(getIsErrorModalOpen),
  };

  const Action = {
    toggleErrorModal: (payload) => dispatch(toggleErrorModal(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isErrorModalOpen);

  const toggle = () => () => {
    Action.toggleErrorModal(!Selector.isErrorModalOpen);
  };

  useEffect(() => {
    setModal14(Selector.isErrorModalOpen);
  }, [Selector.isErrorModalOpen]);

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

export default ErrorModal;
