import "./App.css";
import Hero from "./Components/HeroSection/Hero";
import Hero2 from "./Components/HeroSection2/Hero2";
import Navbar from "./Components/Navbar/Navbar";
import Shopping from "./Components/ShoppingCart/Shopping";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero2 />
    </div>
  );
};

export default App;
