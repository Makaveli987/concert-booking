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
  const [isSelected, setIsSelected] = useState(false);

  const Selector = {
    isErrorModalOpen: useSelector(getIsErrorModalOpen),
    selectedSeats: useSelector(getSelectedSeats),
  };

  const Action = {
    toggleErrorModal: (payload) => dispatch(toggleErrorModal(payload)),
    addSelectedSeat: (payload) => dispatch(addSelectedSeat(payload)),
    removeSelectedSeat: (payload) => dispatch(removeSelectedSeat(payload)),
  };

  const select = () => {
    console.log(props);
    if (props.isReserved) {
      console.log(props.position, " reserved");
      Action.toggleErrorModal(!Selector.isErrorModalOpen);
    } else {
      setIsSelected(!isSelected);
    }
    if (!isSelected) {
      Action.addSelectedSeat(props);
    } else {
      Action.removeSelectedSeat(props);
    }
  };

  return (
    <div
      className="seat"
      onClick={select}
      style={props.isReserved ? reservedStyle : isSelected ? selectedStyle : {}}
    >
      <p style={{ margin: "auto 0", fontSize: "14px" }}>{props.position}</p>
    </div>
  );
};
export default Seat;
