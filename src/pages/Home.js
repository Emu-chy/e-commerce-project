import React from "react";
import HeroSection from "../components/HeroSection";

const Home = () => {
    const data = {
        name: "E-Commerce Shop",
    };
    return <HeroSection nameData={data} />;
};

export default Home;
