import React from "react";
import Carousel from "../Carousel";
import slide from "../../data/carsourData";
// import Calender from "./components/Calender"
import Foot from "../Foot"
import ExploreC from "../ExploreC";
import Citiess from "../Citiess";
import C from "../C";

const Home = () => (
          <>

         <Carousel data={slide.slides} />
        
         <C/>
         <Citiess/>
          <ExploreC/>
          <Foot/>
          </>
);

export default Home;
