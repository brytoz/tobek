import Nav from "../components/Nav";
import Why from "../components/home/Why";
import ContactComp from "../components/home/ContactComp";
import Footer from "../components/Footer";
import ProductsCards from "../components/home/ProductsCards";
import HeroSection from "../components/home/HeroSection";

const Index = () => {
  return (
    <div className="m-0">
      <Nav />
   
      <HeroSection />

      <Why />


      <ProductsCards />
      <ContactComp />

      <Footer />
    </div>
  );
};

export default Index;
