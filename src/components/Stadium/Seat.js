import React from "react";

const seatStyle = {
  width: "30px",
  height: "30px",
  background: "#eee",
  borderRadius: "5px",
  textAlign: "center",
  margin: "4px",
  border: "1px solid #999",
  cursor: "pointer",
  lineHeight: "30px",
};

const Seat = () => {
  return (
    <div style={seatStyle}>
      <p style={{ margin: "auto 0" }}>a1</p>
    </div>
  );
};
export default Seat;
