import React from "react";
import QR from "qrcode.react";

export const QRCode = (props) => {
  return (
    <QR value="https://concert-booking.web.app/ticket_info?section=floor&seat=a1" />
  );
};
