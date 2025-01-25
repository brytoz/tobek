import Nav from "../components/Nav";
// import Head from "../components/home/Head"; 
import Test from "../components/home/Test"; 
import Why from "../components/home/Why";
import ContactComp from "../components/home/ContactComp";
import Footer from "../components/Footer";
import ProductsCards from "../components/home/ProductsCards";

const Index = () => {
  return (
    <div className="m-0">
      <Nav />
      {/* <Head /> */}
      <Test />


      <Why />


      <ProductsCards />
      <ContactComp />

      <Footer />
    </div>
  );
};

export default Index;
