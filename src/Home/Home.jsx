import React from "react";
import Banner from "./Banner/Banner";
import Vision from "./Vision/Vision";
import Event from "./Event/Event";
import Hunger from "./Hunger/Hunger";

const Home = () => {
  return (
    <React.Fragment>
      <Banner />
      <Vision />
      <Event />
      <Hunger />
    </React.Fragment>
  );
};

export default Home;
