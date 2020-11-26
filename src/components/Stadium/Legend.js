import React from "react";
import Seat from "./Seat";

export const Legend = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Seat isReserved />
        <p style={{ margin: "0" }}>Reserved seats</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Seat reservedByUser />
        <p style={{ margin: "0" }}>Reserved by you</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Seat />
        <p style={{ margin: "0" }}>Available seats</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Seat isSelected />
        <p style={{ margin: "0" }}>Selected seats</p>
      </div>
    </div>
  );
};
