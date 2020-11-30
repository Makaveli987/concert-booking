import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Home from "../../components/Home";
import Guests from "../../components/Guests";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import BuyTickets from "../../components/Tickets";
import Login from "../../components/DialogManager/Login";
import Register from "../../components/DialogManager/Register";
import Dashboard from "../../components/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);

  const Action = {
    // getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    setIsAdmin(localStorage.getItem("isAdmin"));
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
          <Login />
          <Register />
        </Route>
        <Route exact path="/buy_tickets">
          <BuyTickets />
        </Route>
        {isAdmin ? (
          <Route exac path="/dashboard">
            <Dashboard />
          </Route>
        ) : null}
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
