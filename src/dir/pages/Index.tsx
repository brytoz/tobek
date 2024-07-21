import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import ChooseUs from "../components/chooseus/ChooseUs";
import Sections from "../components/Sections";
import Comp from "../components/chooseus/Comp";

const Index: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ChooseUs
        
      />
      <Sections />
      <section className=" pt-6 relative block text-black">
        <Comp
          content="At TobekFoods, we specialize in processing a wide variety of premium food products that capture the vibrant flavors and heritage of West Africa. Using the finest ingredients and meticulous techniques, we ensure every product delivers exceptional taste and quality straight to your table."
          title="Our Products"
        />
      </section>
      <Gallery />
      <Footer />
    </>
  );
};

export default Index;
