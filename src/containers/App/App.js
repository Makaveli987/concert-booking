import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "./reducer";
import Home from "../../components/Home";
import Guests from "../../components/Guests";
import About from "../../components/About";
import Gallery from "../../components/Gallery";
import Contact from "../../components/Contact";
import Navbar from "../../components/Navbar";

const App = () => {
  const dispatch = useDispatch();

  const Action = {
    getUsers: (payload) => dispatch(getUsers(payload)),
  };

  useEffect(() => {
    Action.getUsers();
  });

  return (
    <div>
      <Navbar />
      <Home />
      <Guests />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
};

export default App;
