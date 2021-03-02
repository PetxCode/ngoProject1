import React from "react";
import Capture from "../Home/Capture";
import FeatureCard from "../Home/FeatureCard";
import HomeStart from "../Home/HomeStart";
import Love from "../Home/Love";
import MapHolder from "../Home/MapHolder";
import Partner from "../Home/Partner";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import love from "../videos/love.svg";
import ttt from "../videos/ttt.png";
import Story from "../Home/Story";
import SuccessStory from "../Home/SuccessStory";
import Total from "../Home/Total";
import Trusted from "./TrustedBy";

const HomeScreen = () => {
  return (
    <div>
      <center>
        <HomeStart />

        <Partner />
        <Capture />
        <FeatureCard />
        <Love text="Our Community" bg="#FAB43F" img={love} />
        <MapHolder />
        <Love text="Talent Spotlight" bg="#3863DF" img={ttt} bg1="#F4F6FC" />
        <Story />
        <Total />
        <SuccessStory />
        <Footer />
      </center>
    </div>
  );
};

export default HomeScreen;
