import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Project from "./components/Project";
import SubHero from "./components/SubHero";
import Section from "./components/Section";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import TransitionUp from "./components/TransitionUp";
import TransitionDown from "./components/TransitionDown";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Intro />
      <TransitionUp />
      <Project />
      <SubHero />
      <Section />
      <Pricing />
      <TransitionDown />
      <Footer />
    </>
  );
}

export default App;
