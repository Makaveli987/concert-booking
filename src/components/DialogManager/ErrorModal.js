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
import {
  getIsErrorModalOpen,
  getErrorModalMessage,
} from "../../containers/App/selectors";
import { toggleErrorModal } from "../../containers/App/reducer";

const ErrorModal = () => {
  const dispatch = useDispatch();

  const Selector = {
    isErrorModalOpen: useSelector(getIsErrorModalOpen),
    errorModalMessage: useSelector(getErrorModalMessage),
  };

  const Action = {
    toggleErrorModal: (payload) => dispatch(toggleErrorModal(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isErrorModalOpen);

  const toggle = () => () => {
    Action.toggleErrorModal({
      status: !Selector.isErrorModalOpen,
      message: "",
    });
  };

  useEffect(() => {
    setModal14(!Selector.isErrorModalOpen);
  }, [Selector.isErrorModalOpen]);

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>
          {Selector.errorModalMessage}
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
