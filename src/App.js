import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";
import CoinDetails from "./components/CoinDetails";
import Footer from "./components/Footer";
import Derivatives from "./components/Derivatives";
import Trending from "./components/Trending";

function App() {
  return (
    <div style={{backgroundColor:"black"}} >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/coin/:id" element={<CoinDetails />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/derivatives" element={<Derivatives />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
