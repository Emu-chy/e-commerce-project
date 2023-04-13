import React from "react";

import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";
import FeatureProduct from "../components/FeatureProducts";

const Home = () => {
    const data = {
        name: "E-Commerce Shop",
    };
    return (
        <>
            <HeroSection nameData={data} />
            <FeatureProduct />
            <Services />
            <Trusted />
        </>
    );
};

export default Home;
