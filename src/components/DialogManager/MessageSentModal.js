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
  getIsMessageSentModalOpen,
  getMessageSentModalType,
} from "../../containers/App/selectors";
import { toggleMessageSentModal } from "../../containers/App/reducer";

const MessageSentModal = () => {
  const dispatch = useDispatch();

  const Selector = {
    isMessageSentModalOpen: useSelector(getIsMessageSentModalOpen),
    messageSentModalType: useSelector(getMessageSentModalType),
  };

  const Action = {
    toggleMessageSentModal: (payload) =>
      dispatch(toggleMessageSentModal(payload)),
  };

  const toggle = () => () => {
    Action.toggleMessageSentModal({
      status: !Selector.isMessageSentModalOpen,
      type: "",
    });
    window.location.reload(false);
  };

  return (
    <MDBModal
      isOpen={Selector.isMessageSentModalOpen}
      toggle={toggle()}
      size="sm"
    >
      <MDBModalHeader
        style={
          Selector.messageSentModalType === "error"
            ? { backgroundColor: "#CC0000", color: "#fff" }
            : { backgroundColor: "#2bbbad", color: "#fff" }
        }
        toggle={toggle()}
      >
        {Selector.messageSentModalType === "error"
          ? "Sending message failed."
          : "Message sent"}
      </MDBModalHeader>
      <MDBModalFooter>
        <MDBBtn color="info" size="sm" onClick={toggle()}>
          Close
        </MDBBtn>
      </MDBModalFooter>
    </MDBModal>
  );
};

export default MessageSentModal;
