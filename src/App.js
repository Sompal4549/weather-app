import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import ScrollTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

// import ScrollToTop from "./components/BackToTop";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Portfolio />
      <ScrollTop />
      <Contact />
    </div>
  );
}

export default App;
