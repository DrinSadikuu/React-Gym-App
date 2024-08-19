import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import HomePageCard from "./HomePageCard";
import img1 from "../../Assets/Images/homePageCardImg/HomePage3Img.jpg";
import img2 from "../../Assets/Images/homePageCardImg/HomePage2Img.webp";
import img3 from "../../Assets/Images/homePageCardImg/HomePageFirstImage.jpg";

function HpCardContainer() {
  return (
    <div className="w-full h-[100vh] bg-black flex justify-center items-center">
      <div className="w-[90%] h-[80%] bg-zinc-700 flex justify-center items-center space-x-11">
        <Link to="/trainWithUs" className="w-full">
          <HomePageCard img={img1} title="Train With Us" />
        </Link>
        <Link to="/shopPage" className="w-full">
          <HomePageCard img={img2} title="Our Shop" />
        </Link>
        <Link to="/Login" className="w-full">
          <HomePageCard img={img3} title="Be with us" />
        </Link>
      </div>
    </div>
  );
}

export default HpCardContainer;
