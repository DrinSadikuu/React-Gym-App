import React from "react";
import NavBar from "../NavBar";
import HeroPage from "./HeroPage";
import Banner from "./Banner";
import HpCardContainer from "./HpCardContainer";
import Blog from "./Blog";
import Footer from "./Footer";

function HomePage() {
  return (
    <div>
      <NavBar />
      <HeroPage />
      <Banner />
      <HpCardContainer />
      <Blog />
      <Footer />
    </div>
  );
}

export default HomePage;
