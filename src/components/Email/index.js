import React from "react";
import ConcertTicket from "./ConcertTicket";

const Email = (props) => {
  const renderTickets = () => {
    const tickets = props.selectedSeats.map((seat) => {
      let section = "";
      switch (seat.section) {
        case "floor":
          section = "Floor";
          break;
        case "vip":
          section = "Vip";
          break;
        case "leftBalcony":
          section = "Left balcony";
          break;
        case "rightBalcony":
          section = "Right balcony";
          break;
        default:
          break;
      }

      return (
        <ConcertTicket
          section={section}
          sectionForUrl={seat.section}
          seat={seat.position}
        />
      );
    });
    return tickets;
  };
  return (
    <table className="main">
      <tr>
        <td className="wrapper">
          <table border="0" cellPadding="0" cellSpacing="0">
            <tr>
              <td>
                <h1>Ticket reservation</h1>
                <p>Hello {props.name},</p>
                <br />
                <p>Your ticket reservation was successfull.</p>
                <p>
                  If you have additional questions please contact us at
                  office@bandico.com.
                </p>
                <br />
                <br />

                <table
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  className="btn btn-primary"
                >
                  <tbody>
                    <tr>
                      <td align="left">
                        <table border="0" cellPadding="0" cellSpacing="0">
                          <tbody>
                            <tr>
                              <td>{renderTickets()}</td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  );
};

export default Email;
