import "./App.css";
import BenefitsSection from "./components/benefits/benefits-section";
import { Converter } from "./components/converter/Converter";
import Hero from "./components/hero/Hero";

function App() {
  return(
    <>
      <Hero />
      <Converter/>
      <BenefitsSection/>
      
    </>
  )
}

export default App;
