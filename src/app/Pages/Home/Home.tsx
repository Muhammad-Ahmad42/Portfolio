import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Projects from "../Projects/Projects";
import Services from "../Services/Services";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Hero from "../Hero/Hero";

const  Home=()=> {
  return (
    <div className="overflow-hidden ">
     <Hero/>
     <Services/>
     <Works/>
     <Projects/>
     <Skills/>
     <Contact/>
     <Footer/>
    </div>
  );
}
export default Home;