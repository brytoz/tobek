import React from "react";
import CoreValues from "./CoreValues";
import Comp from "./Comp";

const ChooseUs: React.FC = () => {
  return (
    <section className="pb-20 pt-6 relative block text-black">
      <Comp
        content="Years of professional experience in the food processing, packaging
              and exports. Tobek Foods as the most reliable food processing
              vendor in the industry."
        title="Our Integrity"
      />
      <CoreValues />
    </section>
  );
};

export default ChooseUs;
