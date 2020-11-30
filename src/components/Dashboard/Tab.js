import React, { useState } from "react";
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

const Tab = () => {
  const [activeItem, setActiveItem] = useState("1");

  const toggle = (tab) => (e) => {
    if (activeItem !== tab) {
      setActiveItem(tab);
    }
  };

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
      <MDBTabContent activeItem={activeItem}>
        <MDBTabPane tabId="1" role="tabpanel">
          <TabContent
            labels={CHART_LABELS}
            data={[320, 84, 62, 48, 12]}
            cardOneNumber="320"
            cardTwoNumber="160"
            cardOneTitle="Reserved"
            cardTwoTitle="Available"
          />
        </MDBTabPane>
        <MDBTabPane tabId="2" role="tabpanel">
          <TabContent
            labels={CHART_LABELS}
            data={[320, 84, 62, 48, 12]}
            cardOneNumber="1215"
            cardTwoNumber="885"
            cardOneTitle="Reserved"
            cardTwoTitle="Available"
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
