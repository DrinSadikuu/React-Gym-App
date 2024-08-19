import React, { useEffect } from "react";
import HeroImage from "../../Assets/Images/Hero-Image.jpg";
import { gsap } from "gsap";
import NavBar from "../NavBar";

function HeroPage() {
  return (
    <>
      <div
        className="bg-cover h-[100vh] bg-center relative"
        style={{ backgroundImage: `url(${HeroImage})` }}
      >
        <div>
          <h1
            className="absolute top-[35%] left-[15%] text-7xl text-white font-bold "
            id="hero-leftH1"
          >
            There is <br /> no limit
          </h1>
          <h1
            className="absolute top-[35%] left-[70%] text-6xl text-white font-bold "
            id="hero-rightH1"
          >
            Build your healthy life <br /> right now
          </h1>
        </div>
      </div>
      <NavBar />
    </>
  );
}

export default HeroPage;
