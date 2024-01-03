import React from "react";
import { Header } from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

const Home = () => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <Banner />
      </div>
    </div>
  );
};

export default Home;
