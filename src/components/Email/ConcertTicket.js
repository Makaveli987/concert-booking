import React from "react";
import "../../css/index.css";

const ConcertTicket = (props) => {
  return (
    <div
      style={{
        width: "180px",
        height: "400px",
        backgroundImage: `url(https://images.unsplash.com/photo-1563841930606-67e2bce48b78?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80)`,
        backgroundPosition: "bottom",
        backgroundSize: "cover",
        borderRadius: "10px",
        color: "#fff",
        padding: "15px",
        margin: "0 0 20px 0",
      }}
    >
      <h4
        style={{ fontSize: "28px", margin: "0 0 50px 0", fontWeight: "bold" }}
      >
        BANDICO
      </h4>

      <p style={{ fontSize: "16px", margin: "0px", fontWeight: "bold" }}>
        16th January 2020
      </p>
      <p style={{ fontSize: "16px", margin: "0px", fontWeight: "bold" }}>21h</p>
      <p style={{ fontSize: "16px", margin: "0px", fontWeight: "bold" }}>
        Stark Arena
      </p>
      <p
        style={{
          fontSize: "16px",
          margin: "20px 0 10px 0",
          fontWeight: "bold",
        }}
      >
        {props.section} {props.seat}
      </p>

      <img
        style={{ width: "100%" }}
        src={`https://chart.googleapis.com/chart?cht=qr&chl=https%3A%2F%2Fconcert-booking.web.app%2Fticket_info%3Fsection%3D${props.sectionForUrl}%26seat%3D${props.seat}&chs=150x150&choe=UTF-8&chld=L|2`}
        alt="qr code"
      />
    </div>
  );
};

export default ConcertTicket;
