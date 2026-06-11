import "./App.css";
import BenefitsSection from "./components/benefits/benefits-section";
import { Converter } from "./components/converter/Converter";
import Navbar from "./components/navbar/navbar";

function App() {
  return(
    <>
      <Navbar/>
      
      <Converter/>
      <BenefitsSection/>
    </>
  )
}

export default App;
