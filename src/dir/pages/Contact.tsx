import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactComponent from "../components/ContactComponent";
import ReUse from "../components/ReUse";

const Contact: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Navbar />
      <ReUse heading="Connect with  Us" />
      <ContactComponent />

      <Footer />
    </div>
  );
};

export default Contact;
