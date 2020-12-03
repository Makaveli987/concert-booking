import React from "react";
import "../../css/index.css";

export const ConcertTicket = (props) => {
  return (
    <div className="ticket ticket-2">
      <div className="date">
        <span className="day">24</span>
        <span className="month-and-time">
          JAN
          <br />
          <span className="small">8PM</span>
        </span>
      </div>
      <div className="artist">
        <span className="name">Bandico</span>
        <br />
        <span className="live small">LIVE</span>
      </div>
      <div className="location">
        <span>STARK ARENA BG</span>
        <br />
        <div className="qrcode">{props.qrcode}</div>
        <span className="small">
          <span>FLOOR a15</span>
        </span>
      </div>
      <div className="rip"></div>
      <div className="cta">
        <button className="buy" href="#">
          GRAB A TICKET
        </button>
      </div>
    </div>
  );
};
