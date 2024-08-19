import React, { useEffect } from "react";
import { gsap } from "gsap";

function Banner() {
  return (
    <div className="w-full h-[200px] bg-black ">
      <h1 className="ticker-text text-5xl text-white text-center pt-[50px]">
        Your destination for fitness, wellness, and a healthier lifestyle.
      </h1>
    </div>
  );
}

export default Banner;
