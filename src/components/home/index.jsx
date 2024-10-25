import React from "react";
import Hero from "./Hero";
import Discover from "./Discover";
import Values from "./Values";
import Carousel from "./Carousel";
import AboutUs from "../AboutUs";
import GetInTouch from "../GetInTouch";
import StateWise from "../StateWise";

function Home() {
  return (
    <>
      <Hero />
      <Discover />
      <StateWise />
      <Values />
      <Carousel />
      <AboutUs/>
      <GetInTouch/> 
    </>
  );
}

export default Home;
