import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReUse from "../components/ReUse";
import AboutComponent from "../components/AboutComponent";

const About:React.FC = () => {
  return (
    <div className="w-full h-full">
    <Navbar />

    <ReUse heading="About Us" />
    <AboutComponent />
    
    <Footer />
  </div>
    );
}

export default About 



