import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../css/index.css";
import {
  toggleErrorModal,
  addSelectedSeat,
  removeSelectedSeat,
} from "../../containers/App/reducer";
import {
  getIsErrorModalOpen,
  getSelectedSeats,
} from "../../containers/App/selectors";

const reservedStyle = {
  backgroundColor: "#c62828 ",
  color: "#fff",
};

const selectedStyle = {
  backgroundColor: "#0091ea",
  color: "#fff",
};

const reservedByUserStyle = {
  backgroundColor: "#00c853",
  color: "#fff",
};

const Seat = (props) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(props.isSelected);

  const Selector = {
    isErrorModalOpen: useSelector(getIsErrorModalOpen),
    selectedSeats: useSelector(getSelectedSeats),
  };

  const Action = {
    toggleErrorModal: (payload) => dispatch(toggleErrorModal(payload)),
    addSelectedSeat: (payload) => dispatch(addSelectedSeat(payload)),
    removeSelectedSeat: (payload) => dispatch(removeSelectedSeat(payload)),
  };

  const getSeatStyle = () => {
    if (props.reservedByUser) {
      return reservedByUserStyle;
    } else if (props.isReserved) {
      return reservedStyle;
    } else if (isSelected) {
      return selectedStyle;
    }
    return {};
  };

  const select = () => {
    if (props.clickable) {
      if (props.isReserved) {
        Action.toggleErrorModal({
          status: !Selector.isErrorModalOpen,
          message: "This seat is already reserved.",
        });
      } else {
        setIsSelected(!isSelected);
      }
      if (!props.isReserved && !isSelected) {
        Action.addSelectedSeat(props);
      } else {
        Action.removeSelectedSeat(props);
      }
    }
  };

  return (
    <div className="seat" onClick={select} style={getSeatStyle()}>
      <p style={{ margin: "auto 0", fontSize: "14px" }}>{props.position}</p>
    </div>
  );
};
export default Seat;
