import React from "react";
import Jumbotron from "../components/jumbotron/Jumbotron";
import ServiceCards from "../components/serviceCards/ServiceCards";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <ServiceCards />
    </div>
  );
};

export default Home;
