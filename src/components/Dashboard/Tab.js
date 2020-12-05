import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import TabContent from "./TabContent";
import QuestionsTab from "./QuestionsTab";
import { CHART_LABELS } from "../../containers/App/constants";
import {
  getReservedSeats,
  getAvailableSeats,
  getProfit,
  getPotentialProfitInAvailableSeats,
} from "../../containers/App/selectors";
import { getReservedAndAvailableSeats } from "../../containers/App/reducer";

const Tab = () => {
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState("1");

  const Selector = {
    reservedSeats: useSelector(getReservedSeats),
    availableSeats: useSelector(getAvailableSeats),
    profit: useSelector(getProfit),
    potentialProfitInAvailableSeats: useSelector(
      getPotentialProfitInAvailableSeats
    ),
  };

  const Action = {
    getReservedAndAvailableSeats: (payload) =>
      dispatch(getReservedAndAvailableSeats(payload)),
  };

  const toggle = (tab) => (e) => {
    if (activeItem !== tab) {
      setActiveItem(tab);
    }
  };

  useEffect(() => {
    Action.getReservedAndAvailableSeats();
  }, [Action]);

  return (
    <MDBContainer>
      <MDBNav className="nav-tabs mt-5">
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "1"}
            onClick={toggle("1")}
            role="tab"
          >
            Seats
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "2"}
            onClick={toggle("2")}
            role="tab"
          >
            Finance
          </MDBNavLink>
        </MDBNavItem>
        <MDBNavItem>
          <MDBNavLink
            link
            to="#"
            active={activeItem === "3"}
            onClick={toggle("3")}
            role="tab"
          >
            Questions
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>
      <MDBTabContent style={{ minHeight: "100vh" }} activeItem={activeItem}>
        <MDBTabPane tabId="1" role="tabpanel">
          <TabContent
            labels={CHART_LABELS}
            dataReservedSeats={[
              Selector.reservedSeats.total,
              Selector.reservedSeats.vip,
              Selector.reservedSeats.floor,
              Selector.reservedSeats.leftBalcony,
              Selector.reservedSeats.rightBalcony,
            ]}
            dataAvailableSeats={[
              Selector.availableSeats.total,
              Selector.availableSeats.vip,
              Selector.availableSeats.floor,
              Selector.availableSeats.leftBalcony,
              Selector.availableSeats.rightBalcony,
            ]}
            cardOneNumber={Selector.reservedSeats.total}
            cardTwoNumber={Selector.availableSeats.total}
            cardOneTitle="Reserved"
            cardTwoTitle="Available"
          />
        </MDBTabPane>
        <MDBTabPane tabId="2" role="tabpanel">
          <TabContent
            labels={CHART_LABELS}
            dataReservedSeats={[
              Selector.profit.total,
              Selector.profit.vip,
              Selector.profit.floor,
              Selector.profit.leftBalcony,
              Selector.profit.rightBalcony,
            ]}
            dataAvailableSeats={[
              Selector.potentialProfitInAvailableSeats.total,
              Selector.potentialProfitInAvailableSeats.vip,
              Selector.potentialProfitInAvailableSeats.floor,
              Selector.potentialProfitInAvailableSeats.leftBalcony,
              Selector.potentialProfitInAvailableSeats.rightBalcony,
            ]}
            cardOneNumber={Selector.profit.total}
            cardTwoNumber={Selector.potentialProfitInAvailableSeats.total}
            cardOneTitle="Profit"
            cardTwoTitle="Potential profit in available seats"
            finance
          />
        </MDBTabPane>
        <MDBTabPane tabId="3" role="tabpanel">
          <QuestionsTab />
        </MDBTabPane>
      </MDBTabContent>
    </MDBContainer>
  );
};
export default Tab;
