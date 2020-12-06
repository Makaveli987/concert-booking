import React, { useState, useEffect } from "react";
import { renderToString } from "react-dom/server";
import { useSelector, useDispatch } from "react-redux";
import emailjs from "emailjs-com";
import { EMAIL_SERVICE_ID } from "../../base";
import { EMAIL_TEMPLATE_ID } from "../../base";
import Email from "../Email";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBInput,
  MDBCol,
  MDBAlert,
} from "mdbreact";
import {
  getIsBuyInfoModalOpen,
  getSelectedSeats,
  getIsReservationStatusModalOpen,
} from "../../containers/App/selectors";
import {
  reserveSeat,
  toggleBuyInfoModal,
  toggleReservationStatusModal,
} from "../../containers/App/reducer";
import Seat from "../Stadium/Seat";

const BuyInfoModal = (props) => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");

  const Selector = {
    isBuyInfoModalOpen: useSelector(getIsBuyInfoModalOpen),
    isReservationStatusModalOpen: useSelector(getIsReservationStatusModalOpen),
    selectedSeats: useSelector(getSelectedSeats),
  };

  const Action = {
    toggleBuyInfoModal: (payload) => dispatch(toggleBuyInfoModal(payload)),
    toggleReservationStatusModal: (payload) =>
      dispatch(toggleReservationStatusModal(payload)),
    reserveSeat: (payload) => dispatch(reserveSeat(payload)),
  };

  const [modal14, setModal14] = useState(Selector.isBuyInfoModalOpen);

  const toggle = () => () => {
    Action.toggleBuyInfoModal(!Selector.isBuyInfoModalOpen);
  };

  useEffect(() => {
    setErrorMessage("");
    setModal14(Selector.isBuyInfoModalOpen);
  }, [Selector.isBuyInfoModalOpen]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const payment = e.target.elements.payment.value;
    if (name === "" || email === "") {
      setErrorMessage("Please fill all fields");
    } else if (payment === "") {
      setErrorMessage("Please select payment method");
    } else {
      Selector.selectedSeats.map((seat) => {
        Action.reserveSeat({
          data: {
            position: seat.position,
            isReserved: true,
            user: {
              name,
              email,
            },
          },
          section: seat.section,
          seatId: seat.id,
        });
      });

      emailjs
        .send(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, {
          html_message: renderToString(
            <Email name={name} selectedSeats={Selector.selectedSeats} />
          ),
          toEmail: email,
        })
        .then(
          (result) => {
            if (result.status === 200) {
              Action.toggleReservationStatusModal({
                status: !Selector.isReservationStatusModalOpen,
                type: "success",
              });
            }
          },
          (error) => {
            Action.toggleReservationStatusModal({
              status: !Selector.isReservationStatusModalOpen,
              type: "error",
            });
          }
        );
      Action.toggleBuyInfoModal(!Selector.isBuyInfoModalOpen);
    }
  };

  const renderSelectedSeats = () => {
    const seats = props.selectedSeats.map((seat) => {
      return (
        <div
          key={seat.id}
          style={{
            marginRight: "10px",
            display: "flex",
            justifyConten: "center",
            alignItems: "center",
          }}
        >
          <Seat isSelected position={seat.position} />
          <p style={{ margin: "0" }}>{seat.section}</p>
        </div>
      );
    });
    return seats;
  };

  return (
    <MDBContainer>
      <MDBModal isOpen={modal14} toggle={toggle()} centered>
        <MDBModalHeader toggle={toggle()}>Buy Tickets</MDBModalHeader>
        <MDBModalBody>
          {errorMessage === "" ? null : (
            <MDBAlert color="danger">{errorMessage}.</MDBAlert>
          )}
          <MDBCol>
            <h5>Seats</h5>
            <div>
              {props.selectedSeats !== undefined ? renderSelectedSeats() : null}
            </div>
          </MDBCol>
          <hr />
          <MDBCol style={{ margin: "20px 0" }}>
            <h5 style={{ marginBottom: "10px" }}>
              Price:{" "}
              <strong style={{ fontSize: "30px", color: "#2bbbad" }}>
                {props.price}${" "}
              </strong>
            </h5>
          </MDBCol>
          <hr />
          <MDBCol>
            <form
              onSubmit={(e) => {
                onFormSubmit(e);
              }}
            >
              <div className="grey-text">
                <MDBInput
                  name="name"
                  label="Your name"
                  valueDefault={username}
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  name="email"
                  label="Type your email"
                  valueDefault={email}
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    marginBottom: "10px",
                  }}
                >
                  <div style={{ cursor: "pointer" }}>
                    <input
                      style={{ cursor: "pointer" }}
                      type="radio"
                      id="paypal"
                      name="payment"
                      value="paypal"
                    />{" "}
                    <label style={{ cursor: "pointer" }} for="paypal">
                      Paypal
                    </label>
                  </div>
                  <div style={{ cursor: "pointer" }}>
                    <input
                      style={{ cursor: "pointer" }}
                      type="radio"
                      name="payment"
                      value="skrill"
                      id="skrill"
                    />{" "}
                    <label style={{ cursor: "pointer" }} for="skrill">
                      Skrill
                    </label>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <MDBBtn type="submit">Buy Tickets</MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBModalBody>
      </MDBModal>
    </MDBContainer>
  );
};

export default BuyInfoModal;
