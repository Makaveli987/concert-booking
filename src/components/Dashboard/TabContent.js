import React from "react";
import { MDBContainer } from "mdbreact";
import Card from "./Card";
import Chart from "./Chart";

const TabContent = (props) => {
  return (
    <MDBContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "20px",
        }}
      >
        <Card
          title={props.cardOneTitle}
          number={props.cardOneNumber}
          finance={props.finance}
        />
        <Card
          title={props.cardTwoTitle}
          number={props.cardTwoNumber}
          finance={props.finance}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Chart
          labels={props.labels}
          data={props.dataReservedSeats}
          title={props.cardOneTitle}
        />
        <Chart
          labels={props.labels}
          data={props.dataAvailableSeats}
          title={props.cardTwoTitle}
        />
      </div>
    </MDBContainer>
  );
};

export default TabContent;
