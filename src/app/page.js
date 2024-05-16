import HomePage from "@/components/common/home/home-page";
import Gallery from "@/components/cahit/galerry/gallery";
import Spacer from "@/components/cahit/galerry/spacer";
import Wedding from "@/components/cahit/wedding/wedding";
import Timeline from "@/components/mehmet/timeline";
import AboutUs from "@/components/tuba/about";
import React from "react";

import Family from "@/components/tuba/family";

import Event from "@/components/sule/events/event";
import Contact from "@/components/sule/contact/contact";


const Home = () => {
  return (
    <>
    <HomePage/>
    <AboutUs/>
      <Family/>
    <Timeline />
    <Gallery/>
    <Spacer/>
    <Wedding/>
    <Spacer height="40px"/>
    <Event/>
    <Contact/>
      

    </>
    
  );
};

export default Home;
