import HomePage from "@/components/common/home/home-page";
import Gallery from "@/components/cahit/galerry/gallery";
import Spacer from "@/components/cahit/galerry/spacer";
import Wedding from "@/components/cahit/wedding/wedding";
import Timeline from "@/components/mehmet/timeline";
import AboutUs from "@/components/tuba/about";
import React from "react";
import Event from "@/components/sule/events/event";
import Contact from "@/components/sule/contact/contact";


const Home = () => {
  return (
    <>
    <HomePage/>
    <Spacer height="40px"/>
    <AboutUs/>
    <Spacer height="40px"/>
    <Timeline />
    <Spacer height="40px"/>
    <Gallery/>
    <Spacer height="40px"/>
    <Wedding/>
    <Spacer height="40px"/>
    <Event/>
    <Spacer height="40px"/>
    <Contact/>
    <Spacer height="40px"/>
      
    </>
    
  );
};

export default Home;
