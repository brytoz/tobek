import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Error";

import Index from "../pages/Index";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Stack: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default Stack;
