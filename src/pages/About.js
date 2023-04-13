import React from "react";
import HeroSection from "../components/HeroSection";
import { useProductContext } from "../Context/Product-context";

const About = () => {
    const { myName } = useProductContext();
    const data = {
        name: "E-Commerce Store",
    };
    return (
        <>
            {myName}
            <HeroSection nameData={data} />;
        </>
    );
};

export default About;
