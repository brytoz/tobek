import Social from "../components/contact/Social";
import Footer from "../components/Footer";
import ContactComp from "../components/home/ContactComp";
import Nav from "../components/Nav";

const Contact = () => {
  return (
    <div className="m-0">
      <Nav />
      <ContactComp />

      <Social />
      <Footer />
    </div>
  );
};

export default Contact;
