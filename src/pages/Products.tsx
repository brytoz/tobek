import Footer from "../components/Footer";
import ContactComp from "../components/home/ContactComp";
import ProductsCards from "../components/home/ProductsCards";
import Nav from "../components/Nav";

const Products = () => {
  return (
    <div className="w-full">
      <Nav />
      <ProductsCards />

      <ContactComp />

      <Footer />
    </div>
  );
};

export default Products;
