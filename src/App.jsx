// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar2 from "./components/NavBar2";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <NavBar2 />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
