import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { init } from "emailjs-com";
import Home from "../../components/Home";
import Guests from "../../components/Guests";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import BuyTickets from "../../components/Tickets";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import Dashboard from "../../components/Dashboard";
import TicketInfo from "../../components/TicketInfo";
import NotFound from "../../components/NotFound";
import ScrollToTop from "../../components/ScrollToTop";
import { EMAIL_USER_ID } from "../../base";
import MessageSentModal from "../../components/DialogManager/MessageSentModal";

init(EMAIL_USER_ID);

const App = () => {
  const [isAdmin, setIsAdmin] = useState(
    localStorage.getItem("isAdmin") || false
  );

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <Guests />
          <About />
          <Gallery />
          <Contact />
          <Login />
          <Register />
          <MessageSentModal />
        </Route>
        <Route exact path="/buy_tickets">
          <ScrollToTop />
          <BuyTickets />
        </Route>
        {isAdmin ? (
          <Route exac path="/dashboard">
            <ScrollToTop />
            <Dashboard />
          </Route>
        ) : null}
        <Route exac path="/ticket_info" component={TicketInfo}></Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
