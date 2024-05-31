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
import UpButton from "@/components/mehmet/up-button";

const Home = () => {
  return (
    <>
      <HomePage />
      <section id="about">
        <AboutUs />
      </section>
      <section id="timeline">
        <Timeline />
      </section>


      <section id="wedding">
        <Wedding />
      </section>
      <section id="events">
        <Event />
      </section>
      <section id="contact">
        <Contact />
      </section>
      
    </>
  );
};

export default Home;
