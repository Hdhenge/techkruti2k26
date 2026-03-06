import Countdown from "../components/Countdown";
import React from "react";
import Upcoming from "../components/Upcoming";
import Gallery from "../components/Gallery";

const Home = () => {
  return <>
   <div className="pt-100px"> 
   <Countdown/>
   <Upcoming/>
   <Gallery/>
   </div>
  </>
}

export default Home ;