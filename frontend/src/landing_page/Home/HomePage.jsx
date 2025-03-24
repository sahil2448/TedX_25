import React, { useEffect } from "react";
import Hero from "./Hero";
import SpearkersPage from "./SpearkersPage";
import AboutUsPage from "./AboutUsPage";
import Navbar from "../Navbar";
import { useState, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const heroRef = useRef(null);
  const speakerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 50,
        // scale: 0.9,
        duration: 1,
      },
      {
        opacity: 1,
        y: 0,
        duration: 4,
        // scale: 1,
      }
    );
    // gsap.fromTo(
    //   speakerRef.current,
    //   {
    //     opacity: 0,
    //     y: 50,
    //     // scale: 0.9,
    //     duration: 1,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 4,
    //     // scale: 1,
    //     ease: "power3.out",
    //     scrollTrigger: {
    //       trigger: speakerRef.current, // Fixed: should be heroRef.current
    //       start: "top 80%",
    //       end: "bottom 60%",
    //       scrub: true,
    //     },
    //   }
    // );
  }, []);

  return (
    <div className="" style={{ backgroundColor: "#0E0E0E" }}>
      {/* <Navbar /> */}
      <section id="hero-section" ref={heroRef}>
        <Hero />
      </section>
      <section id="about-section">
        <AboutUsPage />
      </section>
      <section id="speakers-section">
        <SpearkersPage />
      </section>
    </div>
  );
};

export default HomePage;
