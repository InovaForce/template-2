import HomePage from "@/components/common/home/home-page";
import Gallery from "@/components/cahit/galerry/gallery";
import Spacer from "@/components/cahit/galerry/spacer";
import Wedding from "@/components/cahit/wedding/wedding";
import Timeline from "@/components/mehmet/timeline";

import React from "react";
import Family from "@/components/tuba/family";
import Event from "@/components/sule/events/event";
import Contact from "@/components/sule/contact/contact";
import AboutUs from "@/components/tuba/about";


const Home = () => {
  return (
    <>
    <HomePage/>
    <Spacer height="40px"/>
    <AboutUs/>
    <Timeline />
    <Spacer height="40px"/>
    <Gallery/>
    <Spacer/>
    <Wedding/>
    <Event/>    
    <Contact/>
      
    </>
    //merhaba
  );
};

export default Home;
