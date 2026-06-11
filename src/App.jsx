import "./App.css";
import BenefitsSection from "./components/benefits/benefits-section";
import { Converter } from "./components/converter/Converter";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Converter />
      <BenefitsSection />
    </>
  );
}

export default App;
