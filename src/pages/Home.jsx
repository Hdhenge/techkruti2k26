import Countdown from "../components/Countdown";
import React from "react";
import Upcoming from "../components/Upcoming";
import Sponsor from "../components/Sponsor";

const Home = () => {
  return (
    <>
      <div className="pt-100px">
        <Countdown />
        <div id="upcoming">
          <Upcoming />
        </div>
        <Sponsor />
      </div>
    </>
  );
};

export default Home;