import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Error from "../pages/Errors";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import Products from "../pages/Products";

const Stack: React.FC = () => {
  return (
    <Suspense>
      <Routes>
        <Route index element={<Index />} />
        <Route path="*" element={<Error />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Products />} /> 
      </Routes>
    </Suspense>
  );
};

export default Stack;