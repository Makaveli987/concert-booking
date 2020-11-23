import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { getUsers } from "./reducer";
import Home from "../../components/Home";
import Guests from "../../components/Guests";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import BuyTickets from "../../components/Tickets";

const App = () => {
  const dispatch = useDispatch();

  const Action = {
    // getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    // Action.getUsers();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          <Guests />
          <About />
          <Gallery />
          <Contact />
        </Route>
        <Route path="/buy_tickets">
          <BuyTickets />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
