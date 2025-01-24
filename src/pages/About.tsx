import Head from "../components/about/Head";
import Intro from "../components/about/Intro";
import Footer from "../components/Footer";
import ContactComp from "../components/home/ContactComp";
import Nav from "../components/Nav";

const About = () => {
  return (
    <div className="m-0  ">
      <Nav />
      <Head />

      <Intro />
      <ContactComp />
      <Footer />
    </div>
  );
};

export default About;
