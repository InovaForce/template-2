import HomePage from "@/components/common/home/home-page";
import Gallery from "@/components/cahit/galerry/gallery";
import Spacer from "@/components/cahit/galerry/spacer";
import Wedding from "@/components/cahit/wedding/wedding";
import Timeline from "@/components/mehmet/timeline";
import AboutUs from "@/components/tuba/about";
import React from "react";

const Home = () => {
  return (
    <>
    <HomePage/>
    <AboutUs/>
      <Timeline />
      <Gallery/>
      <Spacer/>
      <Wedding/>
      <Spacer height="40px"/>
    </>
  );
};

export default Home;
