import Nav from "../components/Nav";
import Why from "../components/home/Why";
import ContactComp from "../components/home/ContactComp";
import Footer from "../components/Footer";
import ProductsCards from "../components/home/ProductsCards";
import HeroCarousel from "../components/home/carousal/HeroCarousel";

const Index = () => {
  return (
    <div className="m-0">
      <Nav />
   
      <HeroCarousel />

      <Why />


      <ProductsCards />
      <ContactComp />

      <Footer />
    </div>
  );
};

export default Index;
