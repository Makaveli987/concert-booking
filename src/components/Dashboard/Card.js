import React from "react";
import "../../css/index.css";

const Card = (props) => {
  const numberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div class="c-dashboardInfo col-lg-3 col-md-6">
      <div class="wrap">
        <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">
          {props.title}
        </h4>
        <span class="hind-font caption-12 c-dashboardInfo__count">
          {props.finance ? `${numberWithCommas(props.number)} $` : props.number}
        </span>
      </div>
    </div>
  );
};

export default Card;
