import React from "react";

const AboutComponent: React.FC = () => {
  return (
    <section className="pb-20 pt-6 relative block bg-white">
      <div className="container mx-auto px-4 lg:pt-12  ">
        <div className="flex flex-wrap  ">
          <h1 className="relative pb-2 text">
            <span className="md:pl-12 text-4xl  lg:text-5xl font-extrabold ">
              Tobek Foods
            </span>
            <span className="mt-4 absolute inset-x-0 bottom-0 h-1 bg-[#7b0f0f] mx-auto w-1/4"></span>
          </h1>{" "}
          <div className="container leading-loose pl-6 mt-6">
            Our journey is rooted in the vibrant traditions and rich
            agricultural heritage of West Africa. What started as a humble
            endeavor has grown into a commitment to bringing the finest West
            African flavors to your table. We take pride in sourcing the highest
            quality herbs, cereals, and vegetables, ensuring that each product
            we offer is both nutritious and delicious. Our passion for West
            African cuisine drives us to continuously innovate, blending
            traditional practices with modern standards to deliver exceptional
            food products that honor our roots. Our team is dedicated to
            excellence, not only in the quality of our ingredients but also in
            our approach to sustainability and customer satisfaction. We believe
            in the power of good food to bring people together, and we strive to
            make every meal a celebration of West African culture and culinary
            tradition. Join us in experiencing the taste of West Africa and
            discover the difference that quality and heritage make.
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
