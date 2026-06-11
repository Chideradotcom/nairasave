import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import { Converter } from "./components/converter/Converter";
import BenefitsSection from "./components/benefits/benefits-section";
import { CTA } from "./components/cta/CTA";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Converter />
      <BenefitsSection />
      <CTA/>
      <Footer/>
    </>
  );
}

export default App;
